import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Modal.css'
import lgo1 from '../../images/logo-dolby-atmos.png'
import lgo2 from '../../images/logo-CHRISTIE.png'
import lgo3 from '../../images/logo-2D.png'
import lgo4 from '../../images/logo-3D.png'
export default function ContentPage() {
    const [openMd1, setOpen1] = useState(false);
    const [openMd2, setOpen2] = useState(false);
    const [openMd3, setOpen3] = useState(false);
    const [openMd4, setOpen4] = useState(false);
    return (
        <div className="nav-icon-content">
            <div className="nav-icon-wrap">
                <ul>
                    <li>
                        <span className="icon-modal" onClick={() => setOpen1(true)}>
                            <img src={lgo1} alt="DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ" />
                        </span>
                        <Modal open={openMd1} onClose={() => setOpen1(false)} center classNames={{
                            overlayAnimationIn: 'customEnterOverlayAnimation',
                            overlayAnimationOut: 'customLeaveOverlayAnimation',
                            modalAnimationIn: 'customEnterModalAnimation',
                            modalAnimationOut: 'customLeaveModalAnimation',
                            modal: 'customModal'
                        }}
                            aria-labelledby="my-modal-title"
                            aria-describedby="my-modal-description"
                            animationDuration={500}>
                            <h4 id="my-modal-title">DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ</h4>
                            <div id="my-modal-description">
                                <p>Dolby Atmos – sự phát triển đáng kể nhất trong công nghệ âm thanh kể từ âm thanh vòm, đang tạo ra sự thay đổi độc đáo trong kĩ thuật thiết kế âm thanh phân lớp, hiện đã có mặt tại Việt Nam và sẵn sàng phục vụ khách hàng tại CineStar Cinema</p>
                                <p>Dolby Atmos sử dụng thiết kế phân lớp tân tiến để tạo nên các rãnh âm thanh. Lớp nền bao gồm các dải âm thanh môi trường tĩnh được phối theo phương pháp âm thanh phân luồng quen thuộc. Các lớp trên trần bao gồm các yếu tố âm thanh động được định hướng và thay đổi một cách chính xác theo hình ảnh hiển thị trên màn hình trong rạp. Bằng cách lắp đặt hệ thống loa ở trên đầu và xung quanh, Dolby Atmos có thể khiến khán giả trải nghiệm những âm thanh trung thực và tự nhiên như thật của bộ phim.</p>
                                <h5 style={{ color: 'rgb(201,201,201' }}>TẠI SAO DOLBY ATMOS CÓ THỂ TẠO NÊN SỰ KHÁC BIỆT KHI TRẢI NGHIỆM ĐIỆN ẢNH</h5>
                                <p>- Âm thanh rõ ràng và được định hướng một cách chính xác hơn; Sự trộn âm có định hướng đối tượng từ các yếu tố âm thanh theo lớp độc lập đến âm thanh phân luồng.</p>
                                <p>- Kết nối ý đồ của đạo diễn từ dữ liệu mô tả và phát lại theo công nghệ âm thanh được trang bị cho từng phòng chiếu.</p>
                                <p>- Tự động tạo ra các rãnh âm thanh tối ưu cho các phòng chiếu 5.1 và 7.1</p>
                                <p>- Tạo ra trải nghiệm âm thanh sống động, trung thực thông qua 128 yếu tố âm thanh đồng thời và không bị mất đi khi phối âm.</p>
                                <p>- Quy mô được điều chỉnh theo kích cỡ của từng phòng chiếu với hệ thống lên đến 64 loa độc lập với nhau.</p>
                                <span>Trên thế giới hiện tại chỉ có 25 rạp trang bị hệ thống Dolby Atmos, và CineStar rất hân hạnh là một thành viên trong số đó.</span>
                            </div>
                        </Modal>
                    </li>
                    <li>
                        <span className="icon-modal" onClick={() => setOpen2(true)}>
                            <img src={lgo2} alt="Máy chiếu CHRISTIE" />
                        </span>
                        <Modal open={openMd2} onClose={() => setOpen2(false)} center classNames={{
                            overlayAnimationIn: 'customEnterOverlayAnimation',
                            overlayAnimationOut: 'customLeaveOverlayAnimation',
                            modalAnimationIn: 'customEnterModalAnimation',
                            modalAnimationOut: 'customLeaveModalAnimation',
                            modal: 'customModal'
                        }}
                            aria-labelledby="my-modal-title"
                            aria-describedby="my-modal-description"
                            animationDuration={500}>
                            <h4 id="my-modal-title">Máy chiếu CHRISTIE</h4>
                            <div id="my-modal-description">
                                <p>Máy chiếu Christie là giải pháp hình ảnh cao cấp cho nhu cầu giải trí, với độ phân giải 1080p - 4k. ( có số điểm ảnh bề ngang cao gấp 4 lần so với chuẩn full HD). Ngoài ra máy còn mang đến cho khán giả những trải nghiệm hình ảnh chân thật hơn nhờ hệ thống thấu kính của mình.</p>
                                <p>Với hệ thống máy chiếu Christie đã được trang bị, CineStar Cinema hy vọng sẽ mang lại những trải nghiệm điện ảnh đích thực dành cho khán giả.</p>
                            </div>
                        </Modal>
                    </li>
                    <li>
                        <span className="icon-modal" onClick={() => setOpen3(true)}>
                            <img src={lgo3} alt="Công nghệ chiếu phim 2D Digital" />
                        </span>
                        <Modal open={openMd3} onClose={() => setOpen3(false)} center classNames={{
                            overlayAnimationIn: 'customEnterOverlayAnimation',
                            overlayAnimationOut: 'customLeaveOverlayAnimation',
                            modalAnimationIn: 'customEnterModalAnimation',
                            modalAnimationOut: 'customLeaveModalAnimation',
                            modal: 'customModal'
                        }}
                            aria-labelledby="my-modal-title"
                            aria-describedby="my-modal-description"
                            animationDuration={500}>
                            <h4 id="my-modal-title">Công nghệ chiếu phim 2D Digital</h4>
                            <div id="my-modal-description">
                                <p>Công nghệ chiếu phim 2D Digital là công nghệ chiếu phim kỹ thuật số 2 chiều, mang tới hình ảnh rõ nét cho khán giả yêu điện ảnh. Khán giả sẽ không phải mang kính khi xem phim 2D Digital.</p>
                                <p>So với công nghệ chiếu phim 35mm sử dụng bản phim nhựa, thì định dạng 2D Digital sẽ giải quyết trọn vẹn vấn đề xước bản phim gây khó chịu cho khán giả, mang lại hình ảnh sắc nét hơn.</p>
                                <p>Hiện tại, tất cả phòng chiếu của CineStar đều trang bị công nghệ chiếu phim 2D Digital.</p>
                            </div>
                        </Modal>
                    </li>
                    <li>
                        <span className="icon-modal" onClick={() => setOpen4(true)}>
                            <img src={lgo4} alt="Công nghệ chiếu phim 3D Digital" />
                        </span>
                        <Modal open={openMd4} onClose={() => setOpen4(false)} center classNames={{
                            overlayAnimationIn: 'customEnterOverlayAnimation',
                            overlayAnimationOut: 'customLeaveOverlayAnimation',
                            modalAnimationIn: 'customEnterModalAnimation',
                            modalAnimationOut: 'customLeaveModalAnimation',
                            modal: 'customModal'
                        }}
                            aria-labelledby="my-modal-title"
                            aria-describedby="my-modal-description"
                            animationDuration={500}>
                            <h4 id="my-modal-title">Công nghệ chiếu phim 3D Digital</h4>
                            <div id="my-modal-description">
                                <p>So với công nghệ chiếu phim 2D Digital (Kỹ thuật số 2 chiều), công nghệ 3D Digital (Kỹ thuật số 3 chiều) cho phép khán giả cảm nhận thêm chiều sâu của hình ảnh, giúp cho không gian điện ảnh trở nên sống động như không gian thực mà chúng ta đang sống.</p>
                                <p>&nbsp;</p>
                                <p>Phim 3D được quay từ tối thiểu hai máy cùng một lúc, từ hai góc nhìn khác nhau tương ứng với hoạt động của hai mắt người. Khi xem phim khán giả sẽ cần đeo kính 3D để lọc hình ảnh cho mỗi mắt, khi qua não bộ sẽ chập lại tạo thành hình ảnh không gian ba chiều.</p>
                                <p>&nbsp;</p>
                                <p>Các phòng chiếu phim 3D Digital này đều sử dụng màn hình tráng bạc để giảm thiểu lượng hao hụt ánh sáng một cách tối đa.</p>
                                <img alt="" src="https://cinestar.com.vn/pictures/moi/8DinhDang/3d2.jpg" style={{ width: 599, height: 426 }} />
                            </div>
                        </Modal>
                    </li>
                </ul>
            </div>
        </div>
    );
}
