import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './member.css'
import Register from '../RegisterForm/Register';
import Login from '../LoginForm/Login';
import Info from '../InfoForm/InfoForm';
import Cookies from 'universal-cookie';

import { Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const cookies = new Cookies();

const DOMAIN = process.env.REACT_APP_DOMAIN;
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

    const [booking, setBooking] = React.useState([]);
    const loggedInUser = cookies.get('user');

    React.useEffect(function effectFunction() {
        const loggedInUser = cookies.get('user');
        if (loggedInUser) {
            const request = new Request(`${DOMAIN}/api/booking/` + loggedInUser.id, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
            async function fetchBooks() {
                const response = await fetch(request);
                const json = await response.json();
                await setBooking(json.data);
            }
            fetchBooks();
        }

        setBooking({});
    }, []);
    const refreshPage = () => {
        window.location.reload();
    }
    let logout = () => {

        const cookies = new Cookies();
        cookies.remove('user');
        refreshPage();
    };

    if (loggedInUser) { // neu da login thi Redirect
        let username = loggedInUser.fullname;

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
                                    <Badge badgeContent={booking.length} color="secondary" showZero>
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