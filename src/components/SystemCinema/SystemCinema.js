import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export default class SystemCinema extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHeThong: [
                {
                    HCM: [
                        {
                            name: 'CCG STAR QUỐC THANH',
                        },
                        {
                            nmae: 'CGG HAI BÀ TRƯNG',
                        }
                    ]
                }
            ],
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
                
            </div>
        );
    }
}
