
import React, { Component } from 'react';
import './movieschedule.css'
import moment from 'moment'
//import CartContent from './../CartContent/CartContent';

import {
    //BrowserRouter as Router,
    Route,
} from "react-router-dom";

const format = "DD-MM-YYYY"
var date = new Date();
var dateTime = moment(date).format(format);
export default class MovieSchedule extends Component {
    constructor(props) {
        super()
        this.state = {
            id: null,
            history: null
        }
        
    }

    List_Day = [
        {
            label: 'Ngày',
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        },
        {
            label: 'Ngày',
            day: date.getDate() + 1,
            month: date.getMonth() + 1,
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 2,
            month: date.getMonth() + 1,
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 3,
            month: date.getMonth() + 1,
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 4,
            month: date.getMonth() + 1,
            year: date.getFullYear()
        },
        {
            label: 'Ngày ',
            day: date.getDate() + 5,
            month: date.getMonth() + 1,
            year: date.getFullYear()
        },
    ]
    ShowItemRap = () => {
        // let list_cinema = JSON.parse(localStorage.getItem('cinema'));
        // const ListCinema = list_cinema.map((item, index) => {
        //     if (item.id === 1) {
        //         return <span key={index}>{item.name} <a href="/LichChieu/id=1" className="btn btn-primary">Go to Test</a></span>
        //     }
        //     if (item.id < 6) {
        //         return <span key={index}>{item.name}</span>
        //     }
        //      return ListCinema;
        // })
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
        const ShowItemCine = () => {
            let list_theater = JSON.parse(localStorage.getItem('theater'));
            const ListRap = list_theater.map((item, index) => {
                if (item.id < 5) {
                    return <span key={index}>{item.name}</span>
                }
                return <span key={index} hidden={true} >{item.name}</span>
            })
            return ListRap;
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
                    
                    <Route path="/LichChieu">
                        <Route path="/LichChieu/id=1" component={ShowItemCine} />
                    </Route>
                </div>
            </div>
        );
    }
}
