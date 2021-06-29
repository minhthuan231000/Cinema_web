import React, { Component } from 'react';
import price2D from '../../images/Price2D.png'
import price3D from '../../images/Price3D.png'
export default class PriceTicket extends Component {
    render() {
        return (
            <div className="cinema-price-content" style={{position: 'relative', display: 'block', width: '100%', height: 'auto', padding: '60px 0'}}>
                <div className="cinema-price-wrap" style={{position: 'relative', display: 'block', zIndex: 1}}>
                    <div classname="cinema-price-load">
                        <div classname="cinema-price-item" style={{marginBlock: '10px'}}>
                            <img src={price2D} alt="pic" style={{maxWidth: '60%'}}/>
                        </div>
                        <div classname="cinema-price-item">
                            <img src={price3D} alt="pic" style={{maxWidth: '60%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
