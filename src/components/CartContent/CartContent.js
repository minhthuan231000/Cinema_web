import React, { Component } from 'react';

class CartContent extends Component {
    render() {
        return (
            <div className="cart-wrap">
                <div className="block-title">
                <h2>Mua vé<br />Online</h2>
                </div>
                <div className="block-list">
                    <div className="select-list" data-cate="film">
                        <div className="select-header">
                            <span></span>
                            <h3 data-holder="Chọn phim">Chọn phim</h3>
                        </div>
                    </div>
                    <div className="select-list" data-cate="cine">
                        <div className="select-header">
                            <span></span>
                            <h3 data-holder="Chọn ghế">Chọn rạp</h3>
                        </div>
                    </div>
                    <div className="select-list" data-cate="day">
                        <div className="select-header">
                            <span></span>
                            <h3 data-holder="Chọn ngày">Chọn ngày</h3>
                        </div>
                    </div>
                    <div className="select-list" data-cate="hour">
                        <div className="select-header">
                            <span></span>
                            <h3 data-holder="Chọn suất chiếu">Chọn suất chiếu</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartContent;