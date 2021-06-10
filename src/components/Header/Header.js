 
import React, { Component } from 'react';
class HeaderTop extends Component {
    render() {
        return (
            <div className="container HeaderTop">
                <div><a className="logo" href="/Home">
                </a>
                </div>
                <div className="navbox">
                    <ul>
                        <li id="phim">
                            <a className="item" href="/Phim">PHIM</a>
                        </li>
                        <li id="lichchieu">
                            <a className="item" href="/Lichchieu">LỊCH CHIẾU</a>
                        </li>
                        <li id="rapvagia">
                            <a className="item" href="/RapvaGia">RẠP VÀ GIÁ</a>
                        </li>
                        <li id="tintuc">
                            <a className="item" href="/Tintuc">TIN TỨC</a>
                        </li>
                        <li id="gioithieu">
                            <a className="item" href="/Gioithieu">GIỚI THIỆU</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderTop;