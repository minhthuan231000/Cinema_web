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
                        <a className="item" href="/Phim">
                            <li id="phim">PHIM</li>
                        </a>
                        <a className="item" href="/Lichchieu">
                            <li id="lichchieu">LỊCH CHIẾU</li>
                        </a>
                        <a className="item" href="/RapvaGia">
                            <li id="rapvagia">RẠP VÀ GIÁ</li>
                        </a>
                        <a className="item" href="/Tintuc">
                            <li id="tintuc">TIN TỨC</li>
                        </a>
                        <a className="item" href="/Gioithieu">
                            <li id="gioithieu">GIỚI THIỆU</li>
                        </a>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderTop;