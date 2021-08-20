import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
//import { Link } from 'react-router-dom';
import './Movies.css'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

//const DOMAIN = process.env.REACT_APP_DOMAIN;
export default class MoviesOpen extends Component {
    /* Xử lý nodejs tại component này */
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        };
    };
    check_login = async(e)=>{
        const loggedInUser = cookies.get('user');
        if (loggedInUser) {
            const target = e.target;

            return window.location.href=("/BookingForm?id="+target.id);
        }else if (!loggedInUser) {
            alert("Please login !!!");
            return;
        }
        
    }
    getFormattedDate(date) {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        return month + '/' + day + '/' + year;
    }
    showMovie = () => {
        const list_movie = JSON.parse(localStorage.getItem('movie')||0);
        let list_sort= [];
         list_sort = list_movie.sort(function (a, b) {
            return a.opening_day - b.opening_day;
        })
        const movies = list_sort.slice(0,9).map((item, key) => {
            let open = this.getFormattedDate(new Date(item.opening_day));
            if (item.id < 7) {
                let img = new Buffer.from(item.image.data).toString("ascii")
                return (
                    <Card key={key}>
                        <Card.Img variant="top" src={`${img}`} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text className="Card_Text">
                                {item.introduce}
                            </Card.Text>
                            <Button variant="primary">Trailer</Button>
                            <Button style={{ marginLeft: '5px' }} variant="text" id={item.id} onClick={this.check_login}>Mua Vé</Button>
                            <Card.Footer>
                                <small className="text-muted">Open: {open} </small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>);
            }

            const img = new Buffer.from(item.image.data).toString("ascii")
            return (
                <Card key={key}>
                    <Card.Img variant="top" src={`${img}`} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <div className="Card_Text">
                            <Card.Text>
                                {item.introduce}
                            </Card.Text>
                        </div>
                        <Button variant="primary">Trailer</Button>
                        <Button style={{ marginLeft: '5px' }} variant="text" id={item.id} onClick={this.check_login}>Mua Vé</Button>
                        <Card.Footer>
                            <small className="text-muted">Open: {open}</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>)
        })
        return movies;
    }
    render() {
        return (
            <div className="List_movies">
                {this.showMovie()}
            </div>
        );
    }
}