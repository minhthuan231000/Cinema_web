import React, { Component } from 'react';
import './Login.css'
import { browserHistory } from 'react-router';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../models/validator';
class Login extends Component {
    /* Xử lý nodejs tại component này */
    constructor(props){
        super(props);
        this.state = {
            formData: {},
            errors: {}, // Contains login field errors
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }
    validateLoginForm = (e) => {
        let errors = {};
        const { formData } = this.state;
        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
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

    submitForm = (e) => {
        //Chặn các event mặc định của form
        e.preventDefault();
       //Gọi hàm validateLoginForm() dùng để kiểm tra form
        const validation = this.validateLoginForm();
        //Kiểm tra lỗi của input trong form và hiển thị
        if (validation !== true) {
          alert(Object.values(validation))
        }else{
          //Login code
            const { formData } = this.state;
            const data = {
                email: formData.email,
                password: formData.password,
            }
            if(formData){
            localStorage.setItem('user', JSON.stringify({data}));
            var request = new Request('http://localhost:9080/api/login',{
                method: 'POST',
                header: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(data),
            });

            fetch(request)
                    .then(function(response){
                        response.json()
                            .then(function(data){
                                console.log(data);
                            })
                    })
            }
        }
      }
    render() {
        const { formData } = this.state;
        var loggedInUser = localStorage.getItem('user');
        

       if (loggedInUser) { // neu da login thi Redirect
        const {history} = this.props;
        history.push('/');
        }
        return (
            <div className="Login container">
                <form  onSubmit={this.submitForm} method="post">
                    <center><h3>Đăng Nhập</h3></center>
                    <h6>Vui lòng nhập tên người dùng(email) và mật khẩu</h6>
                    <div className="form-group">
                        <input name="email" type="email" className="form-control" placeholder="EMAIL (*)" value={formData.email} onChange={e => this.handleInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" className="form-control" placeholder="MẬT KHẨU (*)" value={formData.password} onChange={e => this.handleInputChange(e)} />
                    </div>
                    <button  type="submit" className="btn btn-dark btn-lg btn-block col-5 btnLog">Đăng Nhập</button>
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
