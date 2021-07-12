import React, { Component } from 'react';
import './Register.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '.../../../models/validator';
class Register extends Component {
  /* Xử lý nodejs tại component này */
  constructor() {
    super();
    this.state = {
      email: '',
      errors: null, // Contains login field errors
      isRegister: false
    }
  }

  render() {
    const ShowConfirmEmail = () => {
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
          let request = new Request(`${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/api/confirm`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
          });

          fetch(request)
            .then(res => res.json())
            .then((result) => {
              console.log(result.Status);
              if (result.Status === 'Complete') {
                alert("Đăng kí thành công!");
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
            <button onClick={e => onSubmit(e)} type="button" className="btn btn-dark btn-lg btn-block col-5 btnForget">Kích hoạt tài khoản</button>
          </div>
        </div>
      )
    }
    const ShowReg = () => {
      const formData = {};

      const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;;
        const name = target.name;
        formData[name] = value;
      }

      // Note: this will *not* work as intended.
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

        if (isEmpty(formData.confirm_password)) {
          errors.confirm_password = "Confirm password can't be blank";
        } else if (formData.password !== formData.confirm_password) {
          errors.confirm = "Passwords don't match";
        }
        if (isEmpty(formData.fullname)) {
          errors.fullname = " Fullname can't be blank";
        }
        if (isEmpty(formData.phone)) {
          errors.phone = " Fullname can't be blank";
        }

        if (isEmpty(formData.gender)) {
          errors.gender = "Please check gender";
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
          // vui lòg nhập đầy đủ thôg tin để dki
          if (validation.confirm) {
            alert(validation.confirm);
          } else {
            alert('Please fill in the information to complete the registration')
          };
        } else {
          let data = {
            ...formData,
            role: "user"
          };
          //Login code
          let request = new Request(`${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/api/register`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
          });

          fetch(request)
            .then(res => res.json())
            .then((result) => {
              if (result) {
                if (result.Status === 'Complete') {
                  this.setState({ isRegister: true });
                  this.setState({ email: data.email })
                } else if (result.Status === 'Email is exist') {
                  alert(result.Status)
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
      }

      // const refreshPage = () => {
      //   window.location.reload();
      // }
      return <div className="Register container" >
        <form method="POST">
          <center><h3>Đăng ký</h3></center>
          <div className="form-group col-6 Name">
            <input type="text" name="fullname" className="form-control" onChange={handleInputChange} placeholder="HỌ TÊN (*)" />
          </div>
          <div className="form-group col-6 Tel">
            <input type="text" name="phone" className="form-control" onChange={handleInputChange} placeholder="ĐIỆN THOẠI (*)" />
          </div>
          <div className="form-group" onChange={handleInputChange}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="Nam" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">NAM</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="Nữ" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">NỮ</label>
            </div>
          </div>
          <div className="form-group">
            <input type="email" name="email" className="form-control" onChange={handleInputChange} placeholder="EMAIL (*)" />
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" onChange={handleInputChange} placeholder="MẬT KHẨU (*)" />
          </div>
          <div className="form-group">
            <input type="password" name="confirm_password" className="form-control" onChange={handleInputChange} placeholder="NHẬP LẠI MẬT KHẨU (*)" />
          </div>
          <button onClick={e => submitForm(e)} id="btnSubmitForm" type="submit" className="btn btn-dark btn-lg btn-block col-5 btnReg">Đăng ký</button>
        </form>
      </div>
    }
    const handleShow = () => {
      return this.state.isRegister ? <ShowConfirmEmail /> : <ShowReg />
    }
    return (
      <div>
        {handleShow()}
      </div>
    );
  }
}

export default Register;
