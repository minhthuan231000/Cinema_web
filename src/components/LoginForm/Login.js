import React, { Component } from 'react';
import './Login.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '.../../../models/validator';

import icon_fb from '../../images/icons/icon-facebook.jpg'
import icon_gg from '../../images/icons/icon-google.jpg'
<<<<<<< HEAD

=======
const DOMAIN = process.env.REACT_APP_DOMAIN;
>>>>>>> main
class Login extends Component { // class parent login
    /* Xử lý nodejs tại component này */
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            formData: {},
            errors: null, // Contains login field errors
            LogForm: 0
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
<<<<<<< HEAD
                        let request = new Request(`${process.env.REACT_APP_DOMAIN}/api/login`, {
=======
                        let request = new Request(`${DOMAIN}/api/login`, {
>>>>>>> main
                            method: 'POST',
                            headers: new Headers({ 'Content-Type': 'application/json' }),
                            body: JSON.stringify(data)
                        });

                        fetch(request)
                            .then(res => res.json())
                            .then((result) => {
                                if (result) {
                                    if (result.Status === 'Please active acc!') {
                                        alert("Please active your account!");
                                    } else if (result.Status === 'Complete') {
                                        data = {
                                            id: result.user.id,
                                            email: result.user.email,
                                            fullname: result.user.fullname,
                                            numphone: result.user.numphone,
                                            role: result.user.role,
                                        }
                                        sessionStorage.setItem('user', JSON.stringify(data));
                                        window.location.reload();
                                    } else if (result.Status === 'Email is not exist.') {
                                        alert("Email is not exist. Please sign up!");
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
                        <span  className="active-account"  onClick={e => { onClickActive(e) }}>Active account?</span>
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
                formData[name] = value;
            }
            const ShowForgetonClick = (e) => {
                e.preventDefault();
                let data = {
                    email: formData.email
                }
<<<<<<< HEAD
                let request = new Request(`${process.env.REACT_APP_DOMAIN}/api/forgetpassword`, {
=======
                let request = new Request(`${DOMAIN}/api/forgetpassword`, {
>>>>>>> main
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                });

                fetch(request)
                    .then(res => res.json())
                    .then((result) => {
                        if (result) {
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 2,email:formData.email })
                            } else if (result.Status === 'Don\'t exist') {
                                alert('Email don\'t exist')
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
                    alert('Please fill in the information to complete the registration')
                } else {
                    let data = {
                        ...token,
                        email: this.state.email
                    };
                    //Login code
<<<<<<< HEAD
                    let request = new Request(`${process.env.REACT_APP_DOMAIN}/api/confirm`, {
=======
                    let request = new Request(`${DOMAIN}/api/confirm`, {
>>>>>>> main
                        method: 'POST',
                        headers: new Headers({ 'Content-Type': 'application/json' }),
                        body: JSON.stringify(data)
                    });

                    fetch(request)
                        .then(res => res.json())
                        .then((result) => {
                            console.log(result.Status);
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 3 })
                            } else if (result.Status === 'Invalid') {
                                alert("Thử lại!");
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
                console.log(validation);
                if (!validation) {
                    if (validation.confirm) {
                        alert(validation.confirm);
                  } else {
                    alert('Please fill in the information to complete the reset password')
                  };

                } else {
                    let data = {
                        email: this.state.email,
                        password: formData.password
                    };
                    //Login code
<<<<<<< HEAD
                    let request = new Request(`${process.env.REACT_APP_DOMAIN}/api/forgetpassword/resetpassword`, {
=======
                    let request = new Request(`${DOMAIN}/api/forgetpassword/resetpassword`, {
>>>>>>> main
                        method: 'POST',
                        headers: new Headers({ 'Content-Type': 'application/json' }),
                        body: JSON.stringify(data)
                    });

                    fetch(request)
                        .then(res => res.json())
                        .then((result) => {
                            console.log(result.Status);
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 3 });
                                alert("Đổi mật khẩu thành công!");
                                window.location.reload();
                            } else if (result.Status === 'Invalid') {
                                alert("Thử lại!");
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
<<<<<<< HEAD
                let request = new Request(`${process.env.REACT_APP_DOMAIN}/api/active`, {
=======
                let request = new Request(`${DOMAIN}/api/active`, {
>>>>>>> main
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(data)
                });

                fetch(request)
                    .then(res => res.json())
                    .then((result) => {
                        if (result) {
                            if (result.Status === 'Complete') {
                                this.setState({ LogForm: 5,email:formData.email })
                            } else if (result.Status === 'Don\'t exist') {
                                alert('Email don\'t exist')
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
<<<<<<< HEAD
                let request = new Request(`${process.env.REACT_APP_DOMAIN}/api/confirm`, {
=======
                let request = new Request(`${DOMAIN}/api/confirm`, {
>>>>>>> main
                  method: 'POST',
                  headers: new Headers({ 'Content-Type': 'application/json' }),
                  body: JSON.stringify(data)
                });
      
                fetch(request)
                  .then(res => res.json())
                  .then((result) => {
                    console.log(result.Status);
                    if (result.Status === 'Complete') {
                      alert("Kích hoạt thành công!");
                      window.location.reload();
                    } else if (result.Status === 'Invalid') {
                      alert("Thử lại!");
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
                    return <ShowConfirmEmailActive/>
                default:
                        return;
            }
        }

        //Main
        return (
            <div className="Login container">
                <HandleShow />
            </div>
        );

    }
}

export default Login;
