import React, { Component } from 'react';

export default class MovieSchedule extends Component {
    ShowItemCumRap = () => {
        let list_cinema = JSON.parse(localStorage.getItem('cinema'));
        const ListRap = list_cinema.map((item, index) => {
            if (item.id > 5) {
                return <option key={index}>{item.name}</option>
            }
        })
        return ListRap;
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
    render() {
        return (
            <div className="movie_schedule_wrap">
                <div className="cart-wrap">
                    <div className="block-title">
                        <h2>Hệ thống rạp<br />Online</h2>
                    </div>
                    <div className="block-list">
                        <div className="select-list" data-cate="day">
                            <div className="select-header">
                                <select>
                                    <option hidden={true}>Chọn cụm rạp</option>
                                    {this.ShowItemCumRap()}
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
                    </div>
                </div>
                <div className="movie_schedule_content">

                </div>
            </div>
        );
    }
}
