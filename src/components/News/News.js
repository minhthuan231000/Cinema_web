import React, { useState } from 'react';
import './News.css'
export default function News() {
    return (
        <div>
            <h5>TIN TỨC</h5>
            <div className="news-tab-content" style={{ minHeight: '484.5px', opacity: 1 }}>
                <div className="news-tab-wrap" style={{ opacity: 1 }}>
                    {/*news-col*/}
                    {/*news-col*/}
                    <div id="news" style={{ position: 'relative', width: 1170, height: '1534.92px' }}>
                        <div className="news-item new" style={{ display: 'block', position: 'absolute', left: 0, top: 0 }}>
                            <div className="news-bg">
                                <a classname="view-detail" href="https://cinestar.com.vn/tintuc/theconjuringmaxuiquykhienhelotrailerchinhthucchophantieptheotheconjuring">
                                </a>
                                <div className="news-pic">
                                    <img data-src="https://cinestar.com.vn/pictures/176127737_895216464398053_4305814264711249791_n.jpg" alt="pic" src="https://cinestar.com.vn/pictures/176127737_895216464398053_4305814264711249791_n.jpg" />
                                </div>
                                <div className="news-txt">
                                    <h3>[THE CONJURING: MA XUI QUỶ KHIẾN] - HÉ LỘ TRAILER CHÍNH THỨC CHO PHẦN TIẾP THEO “THE CONJURING”</h3>
                                    "Hẹn hò" ra rạp từ tháng 9/2020, song do ảnh hưởng của COVID-19, cho tới tận mùa hè năm nay, khán giả thế giới mới được thưởng thức phần tiếp theo trong vũ trụ kinh dị The Conjuring đình đám.          </div>
                            </div>
                        </div>
                        <div className="news-item new" style={{ display: 'block', position: 'absolute', left: 390, top: 0 }}>
                            <div className="news-bg">
                                <a classname="view-detail" href="https://cinestar.com.vn/tintuc/thamtulungdanhconanviendandogiaimathuonghieuconanlydonaokhienchangthamtumaikhonglonluonkhiencacfanngongcho">
                                </a>

                                <div className="news-pic">
                                    <img data-src="https://cinestar.com.vn/pictures/Tin%20tức/conan/conan2.jpg" alt="pic" src="https://cinestar.com.vn/pictures/Tin%20tức/conan/conan2.jpg" />
                                </div>
                                <div className="news-txt">
                                    <h3>[THÁM TỬ LỪNG DANH CONAN: VIÊN ĐẠN ĐỎ] Giải mã thương hiệu Conan, lý do nào khiến chàng thám tử “mãi không lớn” luôn khiến các fan ngóng chờ!</h3>
                                    Lần đầu ra mắt năm 1994, Conan giữ nguyên sức hấp dẫn sau hơn hai thập kỷ, là một trong những thương hiệu anime/manga nổi tiếng bậc nhất. Trên thế giới, số lượng bán ra của Conan là 230 triệu bản truyện tranh, đạt doanh thu khoảng 1,1 tỷ USD. Tính thêm giá trị các bản hoạt hình, điện ảnh, vật phẩm... thì tổng giá trị thương hiệu thám tử lừng danh được ước tính khoảng 6 tỷ USD, số liệu tính đến năm 2020.          </div>
                            </div>
                        </div>
                        <div className="news-item new" style={{ display: 'block', position: 'absolute', left: 780, top: 0 }}>
                            <div className="news-bg">
                                <a classname="view-detail" href="https://cinestar.com.vn/tintuc/spacejamkynguyenmoisaumichealjordan20namspacejamchinhthucquaytrolaivoihuyenthoailebronjames">
                                </a>

                                <div className="news-pic">
                                    <img data-src="https://cinestar.com.vn/pictures/Tin%20tức/qưe.jpg" alt="pic" src="https://cinestar.com.vn/pictures/Tin%20tức/qưe.jpg" />
                                </div>
                                <div className="news-txt">
                                    <h3>[SPACE JAM: KỶ NGUYÊN MỚI] - SAU MICHEAL JORDAN  20 NĂM, SPACE JAM CHÍNH THỨC QUAY TRỞ LẠI VỚI HUYỂN THOẠI LEBRON JAMES</h3>
                                    Vào những năm 90 của thế kỷ trước, các nhân vật hoạt hình kinh điển của thương hiệu Looney Tunes đã có một màn "oanh tạc" phòng vé với tựa phim hoạt hình kết hợp live-action Space Jam cùng huyền thoại bóng rổ Michael Jordan. Hai mươi lăm năm sau, Space Jam đình đám một thời sẽ trở lại với phần phim thứ hai, Space Jam: Kỷ Nguyên Mới. Thỏ Bugs, thỏ Lola, chú vịt Tweety và những người bạn thân đã sẵn sàng "nhập cuộc", và lần này huyền thoại đồng hành cùng họ chính là LeBron James.           </div>
                            </div>
                        </div>
                        <div className="news-item new" style={{ display: 'block', position: 'absolute', left: 390, top: 557 }}>
                            <div className="news-bg">
                                <a classname="view-detail" href="https://cinestar.com.vn/tintuc/demnhactuongniemnhacsinguyenanh9xavangtiengduongcam">
                                </a>

                                <div className="news-pic">
                                    <img data-src="https://cinestar.com.vn/pictures/Cinestar/04-2021/350.jpg" alt="pic" src="https://cinestar.com.vn/pictures/Cinestar/04-2021/350.jpg" />
                                </div>
                                <div className="news-txt">
                                    <h3>ĐÊM NHẠC TƯỞNG NIỆM NHẠC SĨ NGUYỄN ÁNH 9: “XA VẮNG TIẾNG DƯƠNG CẦM”</h3>
                                    Nhân ngày giỗ 5 năm của nhạc sĩ Nguyễn Ánh 9, Ha ha production và Dalat Opera House sẽ phối hợp thực hiện đêm nhạc tưởng niệm nhạc sĩ Nguyễn Ánh 9: “Xa vắng tiếng dương cầm”.
                                    Đêm nhạc có sự tham gia biểu diễn của các danh ca, ca sĩ nổi tiếng trong nước và hải ngoại như Elvis Phương, Quang Dũng, Hồ Lệ Thu, Ngọc Liên, và các ca sĩ quen thuộc của TPHCM và Hà Nội: Hương Giang, Huy Luân, Triệu Long, Ngọc Châm, Tuấn Anh.
                                    Đặc biệt người dẫn chương trình trong đêm nhạc là MC Nguyễn Cao Kỳ Duyên.          </div>
                            </div>
                        </div>
                        <div className="news-item new" style={{ display: 'block', position: 'absolute', left: 780, top: 571 }}>
                            <div className="news-bg">
                                <a classname="view-detail" href="https://cinestar.com.vn/tintuc/mortalkombatcuocchiensinhtutattantatvegiaidauhuyenthoaimortalkombatsegaybaothangtunay">
                                </a>

                                <div className="news-pic">
                                    <img data-src="https://cinestar.com.vn/pictures/mortal.png" alt="pic" src="https://cinestar.com.vn/pictures/mortal.png" />
                                </div>
                                <div className="news-txt">
                                    <h3>[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - "TẤT TẦN TẬT" VỀ GIẢI ĐẤU HUYỀN THOẠI MORTAL KOMBAT SẼ GÂY BÃO THÁNG TƯ NÀY</h3>
                                    Đầu năm 2021, "Mortal Kombat" - tựa game đình đám từng là tuổi thơ của thế hệ 8X và đầu 9X sẽ trở lại, nhưng lần này là với phiên bản điện ảnh hứa hẹn xứng tầm "bom tấn hành động". Về độ khắc nghiệt và đẫm máu của giải đấu huyền thoại này, có lẽ không cần phải bàn cãi thêm. Tuy nhiên, có rất nhiều điểm thú vị xoay quanh lịch sử hình thành Mortal Kombat mà không phải ai cũng biết, mà đã biết rồi thì chắc chắn không thể không ra rạp xem ngay bộ phim vào tháng Tư này.           </div>
                            </div>
                        </div>
                        <div className="news-item new" style={{ display: 'block', position: 'absolute', left: 0, top: 731 }}>
                            <div className="news-bg">
                                <a classname="view-detail" href="https://cinestar.com.vn/tintuc/godzilladaichienkongdulichvutrumonsterversequanhungboicanhsieuquaivatdaoanhtac">
                                </a>

                                <div className="news-pic">
                                    <img data-src="https://cinestar.com.vn/pictures/god.png" alt="pic" src="https://cinestar.com.vn/pictures/god.png" />
                                </div>
                                <div className="news-txt">
                                    <h3>[GODZILLA ĐẠI CHIẾN KONG] Du lịch Vũ trụ MonsterVerse qua những bối cảnh siêu quái vật đã oanh tạc</h3>
                                    Vào năm 1954, Godzilla lần đầu được giới thiệu trên màn ảnh qua phim "Gojira" của hãng Toho tại Nhật Bản và trở thành một trong những quái vật nổi tiếng nhất làng điện ảnh. 60 năm sau, Warner Bros. một lần nữa đưa Godzilla trở lại, mở ra vũ trụ điện ảnh của các quái vật Titans.          </div>
                            </div>
                        </div>
                        <div className="news-item new" style={{ display: 'block', position: 'absolute', left: 390, top: 1094 }}>
                            <div className="news-bg">
                                <a classname="view-detail" href="https://cinestar.com.vn/tintuc/dalat–sapkhaitruongnhahatoperahiendaibacnhatthanhphonganhoa">
                                </a>

                                <div className="news-pic">
                                    <img data-src="https://cinestar.com.vn/pictures/1.png" alt="pic" src="https://cinestar.com.vn/pictures/1.png" />
                                </div>
                                <div className="news-txt">
                                    <h3>ĐÀ LẠT – SẮP KHAI TRƯƠNG NHÀ HÁT OPERA HIỆN ĐẠI BẬC NHẤT THÀNH PHỐ NGÀN HOA</h3>
                                    Là thành phố phát triển về Du Lịch – Văn Hoá hàng đầu của Việt Nam, Đà Lạt tiếp tục phấn đấu đẩy mạnh phát triển và bảo tồn Văn Hóa. DALAT OPERA HOUSE là một trong những dự án trọng điểm của thành phố, được trang bị công nghệ hiện đại, góp phần khuyến khích phát triển và lưu giữ văn hóa đẹp, bản điệp khúc thời gian cho các thế hệ sau.          </div>
                            </div>
                        </div>
                    </div></div>
            </div>
        </div>

    );
}
