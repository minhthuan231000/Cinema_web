import React, { Component } from 'react';

class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <div className="bottom-nav">
                    <div className="bottom-wrap">
                        <div className="social">
                            <h2>Liên kết</h2>
                            <ul>
                                <li><a href="https://www.facebook.com" target="" className="facebook">Facebook</a></li>
                                <li><a href="https://www.youtube.com" target="" className="google">Youtubesss</a></li>
                            </ul>
                            <h2>Hotline</h2>
                            <a className="hotline-tel" href="tel:0808 1508">1808 1508</a>
                        </div>
                        <div className="cinestart-price">
                            <h2>Hệ thống rạp</h2>
                            <ul>
                                <li data-name=""><a href="#1">CCG Quốc Thanh</a></li>
                                <li data-name=""><a href="#2">CCG Đà Lạt</a></li>
                                <li data-name=""><a href="#3">CCG Hai Bà Trưng</a></li>
                                <li data-name=""><a href="#4">CCG Bình Dương</a></li>
                                <li data-name=""><a href="#5">CCG Huế</a></li>
                                <li data-name=""><a href="#6">CCG Mỹ Tho</a></li>
                            </ul>
                        </div>
                        <div className="cinestart">
                            <h2>ccg star</h2>
                            <ul>
                                <li data-name="212_2"><a href="/phimdangchieu">Phim đang chiếu</a></li>
                                <li data-name="212_1"><a href="/phimsapchieu">Phim sắp chiếu</a></li>
                                <li data-name="212_3"><a href="/suatchieudacbiet">Suất chiếu đặc biệt</a></li>
                                <li data-name={213}><a href="/lichchieu">Lịch chiếu</a></li>
                                <li data-name={211}><a href="/khuyenmai">Khuyến mãi</a></li>
                            </ul>
                        </div>
                        <div className="info">
                            <h2>Thông tin</h2>
                            <ul>
                                <li data-name={207}><a href="/gioithieu">Giới thiệu</a></li>
                                <li data-name={209}><a href="/tintuc">Tin tức</a></li>
                                <li data-name={210}><a href="/hoivadap">Hỏi và đáp</a></li>
                                <li data-name={118}><a href="/lienhe">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div className="info terms_and_condition">
                            <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
                            <ul>
                                <li><a href="none" data-name="terms_and_condition_2">Quy định chung</a></li>
                                <li><a href="none" data-name="terms_and_condition_3">Điều khoản giao dịch</a></li>
                                <li><a href="none" data-name="terms_and_condition_4">Chính sách bảo mật</a></li>
                                <li><a href="none" data-name="terms_and_condition_5">Thông tin công ty</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom-nav-icon">
                    <ul>
                        <li>
                            <a href="javscript:void(0);" data-name={1}>
                                <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/dolby2.png" align="DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="javscript:void(0);" data-name={2}>
                                <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/crhistie.png" align="Máy chiếu CHRISTIE" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="javscript:void(0);" data-name={3}>
                                <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/2d.jpg" align="Công nghệ chiếu phim 2D Digital" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="javscript:void(0);" data-name={4}>
                                <img src="https://cinestar.com.vn/pictures/moi/8DinhDang/3d.png" align="Công nghệ chiếu phim 3D Digital" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Bottom;
