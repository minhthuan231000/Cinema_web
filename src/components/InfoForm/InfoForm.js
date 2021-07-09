import React, { Component } from 'react';
import './Info.css'
export default class Info extends Component {
  render() {
    return (
      <div className="Info">
        <h2>Thông tin tài khoản</h2>
        <div className="form-group">
          <label>EMAIL:</label>
          <input type="text" className="form-control" name='emai' value='email' readOnly={true} />
        </div>
        <div className="form-group">
          <label>MẬT KHẢU:</label>
          <input type="text" className="form-control" name='password' value='password' readOnly={true}/>
        </div>
        <div className="form-group">
          <label>HỌ TÊN:</label>
          <input type="text" className="form-control" name='password' value='Name' readOnly={true}/>
        </div>
        <div className="form-group">
          <label>SỐ ĐIỆN THOẠI:</label>
          <input type="text" className="form-control" name='password' value='Tel' readOnly={true} />
        </div>
      </div>
    );
  }
}
