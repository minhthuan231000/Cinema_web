import React, { Component } from 'react';
import './Register.css'
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '.../../../models/validator';
const post_server = "9080";
class Register extends Component {
  /* Xử lý nodejs tại component này */
  constructor() {
    super();
    this.state = {
      gender: null,
      user: [],
      formData: {},
      errors: null, // Contains login field errors
      isRegisted: false
    }
  }

  render() {
    const ShowConfirmEmail = () => {
      const formData = {};
      const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        formData[name] = value;
      }
      return (
        <div>
          <form method="POST">
            <h6>Nhập mã xác thực (Vui lòng kiểm tra email)</h6>
            <div className="form-group">
              <input type="email" name='email' className="form-control" onChange={handleInputChange} placeholder="EMAIL (*)" />
            </div>
            <div className="forget-password">
              <button type="submit" className="btn btn-dark btn-lg btn-block col-5 btnForget">Hoàn Tất Đăng Ký</button>
            </div>
          </form>
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
        this.setState({
          formData: formData,
        }) 
      }
      const validateLoginForm = (e) => {
        let errors = {};
        const { formData } = this.state;
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
          alert(Object.values(validation))
        } else {
          //Login code
          const { formData } = this.state;
          let data = {
            fullname: formData.fullname,
            phone: formData.phone,
            gender: formData.gender,
            email: formData.email,
            password: formData.password,
            role: "user"

          };
          if (formData) {
            var request = new Request(`http://localhost:${post_server}/api/register`, {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'application/json' }),
              body: JSON.stringify(data)
            });

            fetch(request)
              .then(res => res.json())
              .then((result) => {
                console.log(result)
                this.setState({
                  isRegisted: true // Nếu đăng ký thành công thì gửi mã xác thực, chỗ này code mã xác thực
                })
                refreshPage();
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
      }

      const refreshPage = () => {
        window.location.reload();
      }
      return <div className="Register container" >
        <form method="POST">
          <center><h3>Đăng ký</h3></center>
          <div className="form-group col-6 Name">
            <input type="text" name="fullname" className="form-control" onChange={e => handleInputChange(e)} placeholder="HỌ TÊN (*)" />
          </div>
          <div className="form-group col-6 Tel">
            <input type="text" name="phone" className="form-control" onChange={e => handleInputChange(e)} placeholder="ĐIỆN THOẠI (*)" />
          </div>
          <div className="form-group" onChange={e => handleInputChange(e)}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="Nam" checked={true} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">NAM</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="Nữ" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">NỮ</label>
            </div>
          </div>
          <div className="form-group">
            <input type="email" name="email" className="form-control" onChange={e => handleInputChange(e)} placeholder="EMAIL (*)" />
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" onChange={e => handleInputChange(e)} placeholder="MẬT KHẨU (*)" />
          </div>
          <div className="form-group">
            <input type="password" name="confirm_password" className="form-control" onChange={e => handleInputChange(e)} placeholder="NHẬP LẠI MẬT KHẨU (*)" />
          </div>
          <button onClick={submitForm} id="btnSubmitForm" type="submit" className="btn btn-dark btn-lg btn-block col-5 btnReg">Đăng ký</button>
        </form>
      </div>
    }
    const handleShow = () => {
      return this.state.isRegisted ? <ShowConfirmEmail /> : <ShowReg />
    }
    return (
      <div>
        {handleShow()}
      </div>
    );
  }
}

export default Register;
