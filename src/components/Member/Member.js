import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './member.css'
import Register from '../RegisterForm/Register';
import Login from '../LoginForm/Login';
import Info from '../InfoForm/InfoForm';

import { Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Member(props) {

    const [openReg, setOpen] = useState(false);
    const onOpenModalReg = () => setOpen(true);
    const onCloseModalReg = () => setOpen(false);

    const [openLog, setOpen2] = useState(false);
    const onOpenModalLog = () => setOpen2(true);
    const onCloseModalLog = () => setOpen2(false);

    const [openInfo, setOpen3] = useState(false);
    const onOpenModalInfo = () => setOpen3(true);
    const onCloseModalInfo = () => setOpen3(false);

    const refreshPage = () => {
        window.location.reload();
    }
    let logout = () => {
        sessionStorage.removeItem('user');
        refreshPage();
    };

    const loggedInUser = sessionStorage.getItem('user');

    if (loggedInUser) { // neu da login thi Redirect
        let username = JSON.parse(loggedInUser).fullname;
        let book = JSON.parse(localStorage.getItem('booking'));
        let countBooking = 0; 
        if(book){
            countBooking =book.length;
        }
        return (
            <div className="register-content">
                <div className="container">
                    <div className="register-wrap">
                        <ul>
                            <li className="btn-logout">
                                <button onClick={logout}><a href="/">Log Out</a></button>
                            </li>
                            <li className="btn-login">
                                <button onClick={onOpenModalInfo}>{username}</button>
                                <Modal open={openInfo} onClose={onCloseModalInfo} center classNames={{
                                    overlay: 'customOverlay', modal: 'ModalInfo',
                                    overlayAnimationIn: 'customEnterOverlayAnimation',
                                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                                    modalAnimationIn: 'customEnterModalAnimation',
                                    modalAnimationOut: 'customLeaveModalAnimation',
                                }} animationDuration={1000}>
                                    <Info />
                                </Modal>
                            </li>
                            <li className="btn-cart">
                                <IconButton aria-label="show 4 new item" color="inherit" href="/Payment"> {/* xem thanh toán vé */}
                                    <Badge badgeContent={countBooking?countBooking:0} color="secondary" showZero>
                                        <ShoppingCartIcon style={{ color: '#e00d7a', fontSize: '35px' }} />
                                    </Badge>
                                </IconButton>
                            </li>
                            <li className="hotline">0808 1508</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="register-content">
                <div className="container">
                    <div className="register-wrap">
                        <ul>
                            <li className="btn-register">
                                <button onClick={onOpenModalReg}>Đăng ký thành viên</button>
                                <Modal open={openReg} onClose={onCloseModalReg} center classNames={{
                                    overlay: 'customOverlay', modal: 'ModalReg',
                                    overlayAnimationIn: 'customEnterOverlayAnimation',
                                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                                    modalAnimationIn: 'customEnterModalAnimation',
                                    modalAnimationOut: 'customLeaveModalAnimation',
                                }} animationDuration={1000}>
                                    <Register />
                                </Modal>
                            </li>
                            <li className="btn-login">
                                <button onClick={onOpenModalLog}>Đăng nhập</button>
                                <Modal open={openLog} onClose={onCloseModalLog} center classNames={{
                                    overlay: 'customOverlay', modal: 'ModalLog',
                                    overlayAnimationIn: 'customEnterOverlayAnimation',
                                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                                    modalAnimationIn: 'customEnterModalAnimation',
                                    modalAnimationOut: 'customLeaveModalAnimation',
                                }} animationDuration={1000}>
                                    <Login />
                                </Modal>
                            </li>
                            <li className="hotline">0808 1508</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}