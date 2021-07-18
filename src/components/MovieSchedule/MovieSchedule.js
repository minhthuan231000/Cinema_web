
import React, { Component } from 'react';
import './movieschedule.css'
export default class MovieSchedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idTheater: 0,
        }

    }
    handleChange = (e) => {
        this.setState({ idTheater: e.target.value });
    }

    render() {
        const ShowCalendar = (sortByTheater) => {
            let list_showtime = JSON.parse(localStorage.getItem('showtime'))
            /* var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            var groubedByTeam = groupBy(list_showtime, 'theater_id')
            let arrItem = []
            console.log(Object.keys(groubedByTeam).forEach(function (category) {
                console.log(`Rạp ${category} có ${groubedByTeam[category].length} suất chiếu: `);
                groubedByTeam[category].forEach(function (memb, i) {
                    console.log(`Suất chiếu ${i + 1}: ${memb.start_time}`)
                    arrItem[i] = <span key={i}>{category} {memb.start_time} Movie: {memb.theater_id}</span>
                })
            })) */
            const showList = list_showtime.map((item, index) => {
                if (item.theater_id == sortByTheater) {
                    return <div className="calendar" key={index}>
                        <span>{item.start_time}</span>
                    </div>
                }
            })
            return showList
        }
        const ShowItemCine = () => {
            let list_theater = JSON.parse(localStorage.getItem('theater')||0);
            const ListRap = list_theater.map((item, index) => {
                if (item.id < 5) {
                    return <span key={index}>{item.name}</span>
                }
                return <span key={index} hidden={true} >{item.name}</span>
            })
            return ListTheater;
        }
        return (
            <div className="container">
                <div className="movie_schedule_wrap">
                    <div className="cart-wrap">
                        <div className="movie_schedule_title">
                            <h2>Hệ Thống Rạp</h2>
                        </div>
                        <div className="block-list">
                            <div className="select-list" data-cate="cine">
                                <div className="select-header">
                                    <div className="select-header">
                                        <select value={this.state.idTheater} onChange={this.handleChange} >
                                            <option hidden={true}>Chọn Rạp</option>
                                            <ShowItemTheater />
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fuild">
                        <div className="movie_schedule_title">
                            <h2>Suất Chiếu</h2>
                        </div>
                        <div className="movie_schedule_content">
                            {ShowCalendar(this.state.idTheater)}
                            <div className="list_cine">
                                <p></p>
                            </div>
                            <div className="type_cine">
                                <p></p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
