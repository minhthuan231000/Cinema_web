import React, { Component } from 'react';
import './Login.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '.../../../models/validator';

import icon_fb from '../../images/icons/icon-facebook.jpg'
import icon_gg from '../../images/icons/icon-google.jpg'

const post_server = "9080";
class Login extends Component { // class parent login
    /* Xử lý nodejs tại component này */
    constructor() {
        super();
        this.state = {
            LogForm: true
        }
    }
    render() {
        const ShowLog = () => { // class child Show Login
            const user = [];
            const formData = {};
            const errors = null;

            const handleInputChange = (event) => {
                const target = event.target;
                const value = target.value;;
                const name = target.name;
                formData[name] = value;
            }
            const validateLoginForm = (e) => {
                if (isEmpty(formData.email)) {
                    errors.email = "Email can't be blank";
                } else if (!isEmail(formData.email)) {
                    errors.email = "Please enter a valid email";
                }
        
                if (isEmpty(formData.password)) {
                    errors.password = "Password can't be blank";
                } else if (isContainWhiteSpace(formData.password)) {
                    errors.password = "Password should not contain white spaces";
                } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
                    errors.password = "Password's length must between 6 to 16";
                }
                if (isEmpty(errors)) {
                    return true;
                } else {
                    return errors;
                }
            }
            const submitForm = (e) => {
                //Chặn các event mặc định của form
                e.preventDefault();
                //Gọi hàm validateLoginForm() dùng để kiểm tra form
                const validation = validateLoginForm();
                //Kiểm tra lỗi của input trong form và hiển thị
                if (validation !== true) {
                    alert(Object.values(validation))
                } else {
                    //Login code
                    let data = {
                        email: formData.email,
                        password: formData.password
                    };
                    if (formData) {
                        var request = new Request(`http://localhost:${post_server}/api/login`, {
                            method: 'POST',
                            headers: new Headers({ 'Content-Type': 'application/json' }),
                            body: JSON.stringify(data)
                        });
        
                        fetch(request)
                            .then(res => res.json())
                            .then((result) => {
                                this.user =  result;
                                if (result) {
                                    data = {
                                        ...data,
                                        fullname: result.fullname,
                                        role: result.role,
                                    }
                                    localStorage.setItem('user', JSON.stringify(data));
                                }
                            },
                                (error) => {
                                    this.error = error;
                                    if (error) {
                                        console.log(error);
                                    }
                                }
                            )
                    }
                }
                window.location.reload();
            }
            const onClick = () => {
                this.setState({
                    LogForm: false
                })
            }
            return (
                <div>
                    <center><h3>Đăng Nhập</h3></center>
                    <h6>Vui lòng nhập tên người dùng(email) và mật khẩu</h6>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" onChange={handleInputChange} placeholder="EMAIL (*)" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' onChange={handleInputChange} placeholder="MẬT KHẨU (*)" />
                    </div>
                    <div className="forget-password">
                        <span onClick={onClick}>Quên mật khẩu?</span>
                    </div>
                    <span>&nbsp;</span>
                    <button onClick={(e) => { submitForm(e) }} type="submit" className="btn btn-dark btn-lg btn-block col-5 btnLog">Đăng Nhập</button>
                    <span>&nbsp;</span>
                    <div className="social-login">
                        <span>
                            <img alt="" src={icon_fb}></img>
                            <a className="fb" href="/login-facebook">Login with Facebook</a></span>
                        <span>
                            <img alt="" src={icon_gg}></img>
                            <a className="gg" href="/login-google">Login with Google</a></span>
                    </div>
                    <span>&nbsp;</span>
                </div>
            )
        }
        const ShowForget = () => { // class child Show Forget Password
            const formData = {};
            const handleInputChange = (event) => {
                const target = event.target;
                const value = target.value;
                const name = target.name;

                console.log(value)
                formData[name] = value;
            }
            const onClick = () => {
                this.setState({
                    LogForm: true
                })
            }
            return (
                <form method="POST">
                    <h6>Vui lòng nhập email để tìm lại mật khẩu</h6>
                    <div className="form-group">
                        <input type="email" name='email' className="form-control" onChange={handleInputChange} placeholder="EMAIL (*)" />
                    </div>
                    <div className="forget-password">
                        <button onClick={onClick} type="submit" className="btn btn-dark btn-lg btn-block col-5 btnForget">Đến Đăng Nhập</button>
                    </div>
                </form>
            )
        }
        const HandleShow = () => {
            return this.state.LogForm ? <ShowLog /> : <ShowForget />
        }
        return (
            <div className="Login container">
                <HandleShow />
            </div>
        );

    }
}

export default Login;
