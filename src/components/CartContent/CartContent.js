import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class CartContent extends Component {
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
                                    <Dropdown.Item eventKey="1">Phim 1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Phim 2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Phim 3</Dropdown.Item>
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
                                    <Dropdown.Item eventKey="1">Rạp 1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Rạp 2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Rạp 3</Dropdown.Item>
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
                                    <Dropdown.Item eventKey="1">Ngày 1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Ngày 2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Ngày 3</Dropdown.Item>
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
                                    <Dropdown.Item eventKey="1">Giờ 1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Giờ 2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Giờ 3</Dropdown.Item>
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