import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './member.css'
import Register from '../RegisterForm/Register';
import Login from '../LoginForm/Login';
export default function Member() {

    const [openReg, setOpen] = useState(false);
    const onOpenModalReg = () => setOpen(true);
    const onCloseModalReg = () => setOpen(false);

    const [openLog, setOpen2] = useState(false);
    const onOpenModalLog = () => setOpen2(true);
    const onCloseModalLog = () => setOpen2(false);

    let logout = () => localStorage.removeItem('user');

    const loggedInUser = localStorage.getItem('user');

    if (loggedInUser) { // neu da login thi Redirect
        let username = JSON.parse(loggedInUser).fullname;
        return (
            <div className="register-content">
                <div className="container">
                    <div className="register-wrap">
                        <ul>
                            <li className="btn-logout">
                                <button onClick={logout}>Log Out</button>
                            </li>
                            <li className="btn-login">
                                <button>{username}</button>
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
                                <Modal open={openReg} onClose={onCloseModalReg} center classNames={{ overlay: 'customOverlay', modal: 'ModalReg' }}>
                                    <Register />
                                </Modal>
                            </li>
                            <li className="btn-login">
                                <button onClick={onOpenModalLog}>Đăng nhập</button>
                                <Modal open={openLog} onClose={onCloseModalLog} center classNames={{ overlay: 'customOverlay', modal: 'ModalLog' }}>
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