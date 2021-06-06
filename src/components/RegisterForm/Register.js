import React, { Component } from 'react';
import './Register.css'
class Register extends Component {
  /* Xử lý nodejs tại component này */
  render() {
    return (
      <div className="Register container">
        <form method="POST">
          <center><h3>Đăng ký</h3></center>
          <div className="form-group col-6 Name">
            <input type="text" className="form-control" placeholder="HỌ TÊN (*)" />
          </div>
          <div className="form-group col-6 Tel">
            <input type="text" className="form-control" placeholder="ĐIỆN THOẠI (*)" />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                NAM
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                NỮ
              </label>
            </div>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="EMAIL (*)" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="MẬT KHẨU (*)" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="NHẬP LẠI MẬT KHẨU (*)" />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block col-5 btnReg">Đăng ký</button>
        </form>
      </div>
    );
  }
}

export default Register;
