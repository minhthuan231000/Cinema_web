import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    /* Xử lý nodejs tại component này */
    render() {
        return (
            <div className="Login container">
                <form method="POST">
                    <center><h3>Đăng Nhập</h3></center>
                    <h6>Vui lòng nhập tên người dùng(email) và mật khẩu</h6>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="EMAIL (*)" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="MẬT KHẨU (*)" />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block col-5 btnLog">Đăng Nhập</button>
                    <div className="social-login">
                        <span><a className="fb" href="/login-facebook">Login with Facebook</a></span>
                        <span><a className="gg" href="/login-google">Login with Google</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
