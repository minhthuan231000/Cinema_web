import React, { Component } from 'react';
export default class Member extends Component {
    render() {
        return (
            <div className="register-content">
                <div className="container">
                <div className="register-wrap">
                    <ul>
                        <li className="btn-register">
                            <a href="Dangky">Đăng ký</a>
                        </li>
                        <li className="btn-login">
                            <a href="Dangnhap">Đăng nhập</a>
                        </li>
                        <a className="hotline" href="tel.08081508">0808 1508</a>
                    </ul>
                </div>
                </div>
            </div>
        );
    }
}