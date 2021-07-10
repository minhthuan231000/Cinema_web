import React, { Component } from 'react';
import './Info.css'
export default class Info extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="Info">
        <h2>Thông tin tài khoản</h2>
        <div className="form-group">
          <label>EMAIL:</label> 
          <input type="text" className="form-control" name='emai' value={user.email} readOnly={true} />
        </div>
        <div className="form-group">
          <label>HỌ TÊN:</label>
          <input type="text" className="form-control" name='fullname' value={user.fullname} readOnly={true}/>
        </div>
        <div className="form-group">
          <label>SỐ ĐIỆN THOẠI:</label>
          <input type="text" className="form-control" name='phone' value={user.numphone} readOnly={true} />
        </div>
        <label><i><small><a href="/History" style={{color: 'white'}}>LICH SỬ ĐẶT VÉ</a></small></i></label>
      </div>
    );
  }
}
