import React, { Component } from 'react';
import './movieschedule.css'
import moment from 'moment'
const format = "DD-MM-YYYY"
var date = new Date();
var dateTime = moment(date).format(format);
export default class MovieSchedule extends Component {
    List_Day = [
        {
            label: 'Hôm nay',
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        },
        {
            label: 'Ngày Mai',
            day: date.getDate() + 1,
            month: date.getMonth(),
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 2,
            month: date.getMonth(),
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 3,
            month: date.getMonth(),
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 4,
            month: date.getMonth(),
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 5,
            month: date.getMonth(),
            year: date.getFullYear()
        },
    ]
    ShowItemRap = () => {
        let list_cinema = JSON.parse(localStorage.getItem('cinema'));
        const ListCinema = list_cinema.map((item, index) => {
            if (item.id < 6) {
                return <span key={index}>{item.name}</span>
            }
        })
        return ListCinema;
    }
    ShowItemDay = () => {
        const ListRap = this.List_Day.map((item, index) => {
            console.log(date.getDate())
            console.log(dateTime)
            return <option key={index}>{item.label}: {item.day}-{item.month}-{item.year}</option>
        })
        return ListRap;
    }
    render() {
        const ShowCalendar = () => {
            const list_day = this.List_Day.map((item, index) => {
                return <span>{item.day}/{item.month}</span>
            })
            return list_day
        }
        return (
            <div className="movie_schedule_wrap">
                <div className="cart-wrap">
                    <div className="movie_schedule_title">
                        <h2>Lịch chiếu</h2>
                    </div>
                    <div className="block-list">
                        <div className="select-list" data-cate="cine">
                            <div className="select-header">
                                <div className="select-header">
                                    <select>
                                        {this.ShowItemDay()}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie_schedule_content">
                    <div className="calendar">
                        <ShowCalendar />
                    </div>
                    <div className="list_cine">
                        <p></p>
                        {this.ShowItemRap()}
                    </div>
                    <div className="type_cine">
                        <p></p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
        );
    }
}
