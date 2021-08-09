import React, { Component } from 'react';
import './Login.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '.../../../models/validator';
import LoginHooks from './Login-google'
import icon_fb from '../../images/icons/icon-facebook.jpg'
import Cookies from 'universal-cookie';
import Alert from '@material-ui/lab/Alert';
const cookies = new Cookies();

const DOMAIN = process.env.REACT_APP_DOMAIN;

class Login extends Component { // class parent login
    /* Xử lý nodejs tại component này */
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            formData: {},
            errors: null, // Contains login field errors
            LogForm: 0,
            alert: 0
        }
    }
    render() {
        const ShowLog = () => { // class child Show Login
            const formData = {};
            //Lấy giá trị từ form lưu vào biến
            const handleInputChange = (event) => {
                const target = event.target;
                const value = target.value;;
                const name = target.name;
                formData[name] = value;
            }
            //Kiểm tra thông tin Input
            const validateLoginForm = (e) => {
                let errors = {};
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
            //Sự kiện submit khi hoàn thành nhập thông tin
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

                    this.setState({ email: data.email });

                    if (formData) {

                        let request = new Request(`${DOMAIN}/api/login`, {

                            method: 'POST',
                            headers: new Headers({ 'Content-Type': 'application/json' }),
                            body: JSON.stringify(data)
                        });

                        fetch(request)
                            .then(res => res.json())
                            .then((result) => {
                                if (result) {
                                    if (result.Status === 'Please active acc!') {
                                        this.setState({
                                            alert: 1
                                        })
                                    } else if (result.Status === 'Complete') {
                                        data = {
                                            id: result.user.id,
                                            email: result.user.email,
                                            fullname: result.user.fullname,
                                            numphone: result.user.numphone,
                                        }
                                        cookies.set('user', data, { path: '/' });

                                        this.setState({
                                            alert: 2
                                        })
                                        window.location.reload();

                                    } else if (result.Status === 'Email is not exist.') {
                                        this.setState({
                                            alert: 3
                                        })
                                    }
                                    else if (result.Status === 'Password wrong!') {
                                        this.setState({
                                            alert: 4
                                        })
                                    }
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
                setTimeout(
                    function () {
                        this.setState({
                            alert: 0
                        });
                    }
                        .bind(this),
                    3000
                )
            }
            //Sự kiện quên mật khẩu
            const onClickForget = (e) => {
                this.setState({
                    LogForm: 1
                })
            }
            //Kích hoạt tài khoản
            const onClickActive = (e) => {
                this.setState({
                    LogForm: 4
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
                        <span className="forget" onClick={e => { onClickForget(e) }}>Quên mật khẩu?</span>
                        <span className="active-account" onClick={e => { onClickActive(e) }}>Active account?</span>
                    </div>

                    <span>&nbsp;</span>
                    <button onClick={(e) => { submitForm(e) }} type="submit" className="btn btn-dark btn-lg btn-block col-5 btnLog">Đăng nhập</button>
                    <span>&nbsp;</span>
                    <div className="social-login">
                        <button className="btnAuth" >
                            <img alt="" src={icon_fb}></img>
                            <span className="fb" >Login with Facebook</span></button>
                        <LoginHooks/>
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
                formData[name] = value;
            }
            const ShowForgetonClick = (e) => {
                e.preventDefault();
                let data = {
                    email: formData.email
                }

                let request = new Request(`${DOMAIN}/api/forgetpassword`, {

                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                });

                fetch(request)
                    .then(res => res.json())
                    .then((result) => {
                        if (result) {
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 2, email: formData.email })
                            } else if (result.Status === 'Don\'t exist') {
                                this.setState({
                                    alert: 5
                                })
                            }
                        }
                    },
                        (error) => {
                            this.setState({
                                error: error
                            });
                            if (error) {
                                console.log(error);
                            }
                        }
                    )
            }
            return (
                <form method="POST">
                    <h6>Vui lòng nhập email để tìm lại mật khẩu</h6>
                    <div className="form-group">
                        <input type="email" name='email' className="form-control" onChange={handleInputChange} placeholder="EMAIL (*)" />
                    </div>
                    <div className="forget-password">
                        <button onClick={e => (ShowForgetonClick(e))} enabled="false" type="submit" className="btn btn-dark btn-lg btn-block col-5 btnForget">Xác nhận</button>
                    </div>
                </form>
            )
        }
        const ShowConfirmEmail = () => {
            let token = {};
            const handleInputChange = (event) => {
                const target = event.target;
                const value = target.value;
                const name = target.name;
                token[name] = value;
            }
            const onSubmitConfirm = ((e) => {
                //Chặn các event mặc định của form
                e.preventDefault();
                if (token == null) {
                    // vui lòg nhập đầy đủ thôg tin để dki
                    this.setState({
                        alert: 6
                    })
                } else {
                    let data = {
                        ...token,
                        email: this.state.email
                    };
                    //Login code

                    let request = new Request(`${DOMAIN}/api/confirm`, {

                        method: 'POST',
                        headers: new Headers({ 'Content-Type': 'application/json' }),
                        body: JSON.stringify(data)
                    });

                    fetch(request)
                        .then(res => res.json())
                        .then((result) => {
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 3 })
                            } else if (result.Status === 'Invalid') {
                                this.setState({
                                    alert: 7
                                })
                            }
                        },
                            (error) => {
                                this.setState({
                                    error: error
                                });
                                if (error) {
                                    console.log(error);
                                }
                            }
                        )
                }
            })
            return (
                <div>
                    <h6>Nhập mã xác thực (Vui lòng kiểm tra email)</h6>
                    <div className="form-group">
                        <input type="text" name='token' className="form-control" onChange={handleInputChange} placeholder="CODE (*)" />
                    </div>
                    <div className="forget-password">
                        <button onClick={e => onSubmitConfirm(e)} type="button" className="btn btn-dark btn-lg btn-block col-5 btnForget">Tạo mật khẩu mới</button>
                    </div>
                </div>
            )
        }
        const ResetPassword = () => {
            let formData = {};
            const handleInputChange = (event) => {
                const target = event.target;
                const value = target.value;
                const name = target.name;
                formData[name] = value;
            }
            const validateLoginForm = (e) => {
                let errors = {};
                if (isEmpty(formData.password)) {
                    errors.password = "Password can't be blank";
                } else if (isContainWhiteSpace(formData.password)) {
                    errors.password = "Password should not contain white spaces";
                } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
                    errors.password = "Password's length must between 6 to 16";
                }
                if (isEmpty(formData.confirm_password)) {
                    errors.confirm_password = "Confirm password can't be blank";
                } else if (formData.password !== formData.confirm_password) {
                    errors.confirm = "Passwords don't match";
                }
                if (isEmpty(errors)) {
                    return true;
                } else {
                    return errors;
                }
            }
            const onSubmitReset = ((e) => {
                //Chặn các event mặc định của form
                e.preventDefault();

                const validation = validateLoginForm();
                if (!validation) {
                    if (validation.confirm) {
                        alert(validation.confirm);
                    } else {
                        this.setState({
                            alert: 8
                        })
                    };

                } else {
                    let data = {
                        email: this.state.email,
                        password: formData.password
                    };
                    //Login code

                    let request = new Request(`${DOMAIN}/api/forgetpassword/resetpassword`, {

                        method: 'POST',
                        headers: new Headers({ 'Content-Type': 'application/json' }),
                        body: JSON.stringify(data)
                    });

                    fetch(request)
                        .then(res => res.json())
                        .then((result) => {
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 3, alert: 9 });
                                window.location.reload();
                            } else if (result.Status === 'Invalid') {
                                this.setState({
                                    alert: 7
                                })
                            }
                        },
                            (error) => {
                                this.setState({
                                    error: error
                                });
                                if (error) {
                                    console.log(error);
                                }
                            }
                        )
                }
            })
            return (
                <div>
                    <h6>Reset password:</h6>
                    <div className="form-group">
                        <input type="password" name='password' className="form-control" onChange={handleInputChange} placeholder="New password (*)" />
                    </div>
                    <div className="form-group">
                        <input type="password" name='confirm_password' className="form-control" onChange={handleInputChange} placeholder="Confirm password (*)" />
                    </div>
                    <div className="forget-password">
                        <button onClick={e => onSubmitReset(e)} type="button" className="btn btn-dark btn-lg btn-block col-5 btnForget">ResetPassword</button>
                    </div>
                </div>
            )
        }
        const ShowActiveForm = () => { // class child Show Active account
            const formData = {};
            const handleInputChange = (event) => {
                const target = event.target;
                const value = target.value;
                const name = target.name;
                formData[name] = value;
            }
            const ShowActiveForm = (e) => {
                e.preventDefault();
                let data = {
                    email: formData.email
                }

                let request = new Request(`${DOMAIN}/api/active`, {

                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                });

                fetch(request)
                    .then(res => res.json())
                    .then((result) => {
                        if (result) {
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 5, email: formData.email })
                            } else if (result.Status === 'Don\'t exist') {
                                this.setState({
                                    alert: 5
                                })
                            }
                        }
                    },
                        (error) => {
                            this.setState({
                                error: error
                            });
                            if (error) {
                                console.log(error);
                            }
                        }
                    )
            }
            return (
                <form method="POST">
                    <h6>Vui lòng nhập email để kích hoạt tài khoản: </h6>
                    <div className="form-group">
                        <input type="email" name='email' className="form-control" onChange={handleInputChange} placeholder="EMAIL (*)" />
                    </div>
                    <div className="forget-password">
                        <button onClick={e => (ShowActiveForm(e))} enabled="false" type="submit" className="btn btn-dark btn-lg btn-block col-5 btnForget">Xác nhận</button>
                    </div>
                </form>
            )
        }
        const ShowConfirmEmailActive = () => {
            let token = {};

            const handleInputChange = (event) => {
                const target = event.target;
                const value = target.value;
                const name = target.name;
                token[name] = value;
            }
            const onSubmit = ((e) => {
                //Chặn các event mặc định của form
                e.preventDefault();
                if (token == null) {
                    // vui lòg nhập đầy đủ thôg tin để dki
                    alert('Please fill in the information to complete the registration')
                } else {
                    let data = {
                        ...token,
                        email: this.state.email
                    };
                    //Login code

                    let request = new Request(`${DOMAIN}/api/confirm`, {
                        method: 'POST',
                        headers: new Headers({ 'Content-Type': 'application/json' }),
                        body: JSON.stringify(data)
                    });

                    fetch(request)
                        .then(res => res.json())
                        .then((result) => {
                            if (result.Status === 'Complete') {
                                this.setState({
                                    alert: 10
                                })
                                window.location.reload();
                            } else if (result.Status === 'Invalid') {
                                this.setState({
                                    alert: 7
                                })
                            }
                        },
                            (error) => {
                                this.setState({
                                    error: error
                                });
                                if (error) {
                                    console.log(error);
                                }
                            }
                        )
                }
            })
            return (
                <div>
                    <h6>Nhập mã xác thực (Vui lòng kiểm tra email)</h6>
                    <div className="form-group">
                        <input type="text" name='token' className="form-control" onChange={handleInputChange} placeholder="CODE (*)" />
                    </div>
                    <div className="forget-password">
                        <button onClick={e => onSubmit(e)} type="button" className="btn btn-dark btn-lg btn-block col-5 btnForget">Kích Hoạt</button>
                    </div>
                </div>
            )
        }
        const HandleAlert = () => {
            if (this.state.alert === 1) return <Alert severity="warning">Please active account !</Alert>
            if (this.state.alert === 2) return <Alert severity="success">Login Success !</Alert>
            if (this.state.alert === 3) return <Alert severity="warning">Email is not exist. Please sign up !</Alert>
            if (this.state.alert === 4) return <Alert severity="error">Password was wrong. Please check again !</Alert>
            if (this.state.alert === 5) return <Alert severity="warning">Email don't exist</Alert>
            if (this.state.alert === 6) return <Alert severity="info">Please fill in the information to complete the registration</Alert>
            if (this.state.alert === 7) return <Alert severity="warning">Please try again</Alert>
            if (this.state.alert === 8) return <Alert severity="info">Please fill in the information to complete the reset password</Alert>
            if (this.state.alert === 9) return <Alert severity="success">Change password success !</Alert>
            if (this.state.alert === 10) return <Alert severity="success">Confirm success !</Alert>
        }
        const HandleShow = () => {
            const choose = this.state.LogForm;
            switch (choose) {
                case 0:
                    return <ShowLog />
                case 1:
                    return <ShowForget />
                case 2:
                    return <ShowConfirmEmail />
                case 3:
                    return <ResetPassword />
                case 4:
                    return <ShowActiveForm />
                case 5:
                    return <ShowConfirmEmailActive />
                default:
                    return;
            }
        }

        //Main
        return (
            <div className="Login container">
                <HandleShow />
                {HandleAlert()}
            </div>
        );

    }
}

export default Login;
