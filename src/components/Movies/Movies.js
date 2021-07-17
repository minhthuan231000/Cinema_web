import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
//import { Link } from 'react-router-dom';
import './Movies.css'
export default class MoviesOpen extends Component {
    /* Xử lý nodejs tại component này */
    constructor(props) {
        super(props);
        this.state = {};
    };
    
    check_login = (e)=>{
        const loggedInUser = sessionStorage.getItem('user');
        if (loggedInUser) {
            const target = e.target;
            console.log(target.id)
            return window.location.href=("/BookingForm?id="+target.id);
        }else if (!loggedInUser) {
            alert("Please login !!!");
            return;
        }
    }
    
    showMovie = () => {
        let list_movie= [];
        list_movie = JSON.parse(localStorage.getItem('movie'));
        const movies = list_movie.map((item, key) => {
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
                                <small className="text-muted">Last updated {Math.floor(Math.random() * 10) + 1} mins ago</small>
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
                            <small className="text-muted">Last updated {Math.floor(Math.random() * 10) + 1} mins ago</small>
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