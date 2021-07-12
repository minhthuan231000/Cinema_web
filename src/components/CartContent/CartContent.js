import React, { Component } from 'react';

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
        let list_movie = JSON.parse(localStorage.getItem('movie'));
        const ListPhim = list_movie.map((item, index) => {
            if (item.id < 4) {
                return <option key={index}>{item.name}</option>
            }
        })
        return ListPhim;
    }
    ShowItemRap = () => {
        let list_theater = JSON.parse(localStorage.getItem('theater'));
        const ListRap = list_theater.map((item, index) => {
            if (item.id < 5) {
                return <option key={index}>{item.name}</option>
            }
        })
        return ListRap;
    }
    ShowItemNgay = () => {
        let list_movie = JSON.parse(localStorage.getItem('movie'));
        const ListNgay = list_movie.map((item, index) => {
            if(item.id < 5){
                return <option key={index}>{item.opening_day}</option>
            }
        }
        )
        return ListNgay;
    }
    ShowItemGio = () => {
        let list_showtime = JSON.parse(localStorage.getItem('showtime'));
        const ListGio = list_showtime.map((item, index) => {
            if (item.id < 5) {
                return <option key={index}>{item.start_time}</option>
            }
        })
        return ListGio;
    }

    render() {
        return (
            <div className="cart-wrap">
                <div className="block-title">
                    <h2>Mua vé<br />Online</h2>
                </div>
                <div className="block-list">
                    <div className="select-list" data-cate="film">
                        <div className="select-header">
                            <select>
                                <option hidden={true}>Chọn phim</option>
                                {this.ShowItemPhim()}
                            </select>
                        </div>
                    </div>
                    <div className="select-list" data-cate="cine">
                        <div className="select-header">
                            <div className="select-header">
                                <select>
                                    <option hidden={true}>Chọn rạp</option>
                                    {this.ShowItemRap()}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="select-list" data-cate="day">
                        <div className="select-header">
                            <select>
                                <option hidden={true}>Chọn ngày</option>
                                {this.ShowItemNgay()}
                            </select>
                        </div>
                    </div>
                    <div className="select-list" data-cate="hour">
                        <div className="select-header">
                            <select>
                                <option hidden={true}>Chọn suất chiếu</option>
                                {this.ShowItemGio()}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartContent;