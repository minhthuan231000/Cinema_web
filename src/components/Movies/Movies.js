import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
//import { Link } from 'react-router-dom';
import './Movies.css'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const DOMAIN = process.env.REACT_APP_DOMAIN;
export default class MoviesOpen extends Component {
    /* Xử lý nodejs tại component này */
    constructor(props) {
        super(props);
        this.state = {};
    };
    
    check_login = async(e)=>{
        const loggedInUser = cookies.get('user');
        if (loggedInUser) {
            const target = e.target;
            const request = new Request(`${DOMAIN}/api/movie/`+target.id, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
            async function fetchBooks() {
                await fetch(request);
            }
            await fetchBooks();
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
        let list_movie= [];
        list_movie = JSON.parse(localStorage.getItem('movie')||0);
        const movies = list_movie.map((item, key) => {
            let open = this.getFormattedDate(new Date(item.opening_day));
            if (item.id < 7) {
                let img = new Buffer.from(item.image.data).toString("ascii")
                return (
                    <Card key={key}>
                        <Card.Img variant="top" src={`data:image/png;base64,${img}`} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text className="Card_Text">
                                {item.introduce}
                            </Card.Text>
                            <Button variant="primary">Trailer</Button>
                            <Button style={{ marginLeft: '5px' }} id={item.id} variant="text" onClick={this.check_login}>Mua Vé</Button>
                            <Card.Footer>
                                <small className="text-muted">View: {item.view} </small>
                                <p></p>
                                <small className="text-muted">Open: {open}</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>);
            }

            const img = new Buffer.from(item.image.data).toString("ascii")
            return (
                <Card key={key}>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${img}`} />
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
                            <small className="text-muted">View: {item.view} </small>
                                <p></p>
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