import React, { Component } from 'react';

class ContentPage extends Component {
    render() {
        return (
            <div className="nav-icon-content">
                <div className="nav-icon-wrap">
                    <ul>
                        <li>
                            <a href="javscript:void(0);" data-name={1}>
                                <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/dolby.png" alt="DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ" />
                            </a>
                        </li>
                        <li>
                            <a href="javscript:void(0);" data-name={2}>
                            <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/christie.png" alt="Máy chiếu CHRISTIE" />
                            </a>
                        </li>
                        <li>
                            <a href="javscript:void(0);" data-name={3}>
                            <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/2d.png" alt="Công nghệ chiếu phim 2D Digital" />
                            </a>
                        </li>
                        <li>
                            <a href="javscript:void(0);" data-name={4}>
                            <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/3d3.png" alt="Công nghệ chiếu phim 3D Digital" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContentPage;