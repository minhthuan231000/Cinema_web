import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class CartContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listPhim: [
                { name: "Phim 1" },
                { name: "Phim 2" },
                { name: "Phim 3" }
            ],
            listRap: [
                { name: "Rap 1" },
                { name: "Rap 2" },
                { name: "Rap 3" },
            ],
            listNgay: [
                { name: "Ngay 1" },
                { name: "Ngay 2" },
                { name: "Ngay 3" },
            ],
            listGio: [
                { name: "Gio 1" },
                { name: "Gio 2" },
                { name: "Gio 3" },
            ]
        }
    }
    ShowItemPhim = () => {
        const ListPhim = this.state.listPhim.map((item, index) =>
            <Dropdown.Item eventKey={index}>{item.name}</Dropdown.Item>
        )
        return ListPhim;
    }
    ShowItemRap = () => {
        const ListPhim = this.state.listRap.map((item, index) =>
            <Dropdown.Item eventKey={index}>{item.name}</Dropdown.Item>
        )
        return ListPhim;
    }
    ShowItemNgay = () => {
        const ListPhim = this.state.listNgay.map((item, index) =>
            <Dropdown.Item eventKey={index}>{item.name}</Dropdown.Item>
        )
        return ListPhim;
    }
    ShowItemGio = () => {
        const ListPhim = this.state.listGio.map((item, index) =>
            <Dropdown.Item eventKey={index}>{item.name}</Dropdown.Item>
        )
        return ListPhim;
    }
    render() {
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <li
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
                style={{ listStyle: 'none', display: 'inline', width: '100%' }}
            >
                {children}
                <span></span>
            </li>
        ));
        return (
            <div className="cart-wrap">
                <div className="block-title">
                    <h2>Mua vé<br />Online</h2>
                </div>
                <div className="block-list">
                    <div className="select-list" data-cate="film">
                        <div className="select-header">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <h3>Chọn Phim</h3>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.ShowItemPhim()}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="select-list" data-cate="cine">
                        <div className="select-header">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <h3>Chọn Rạp</h3>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.ShowItemRap()}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="select-list" data-cate="day">
                        <div className="select-header">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <h3>Chọn Ngày</h3>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.ShowItemNgay()}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="select-list" data-cate="hour">
                        <div className="select-header">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <h3>Chọn Suất Chiếu</h3>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ width: '290px', alignSelf: 'left' }}>
                                    {this.ShowItemGio()}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartContent;