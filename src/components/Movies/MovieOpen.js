import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Movies.css'
export default class MoviesOpen extends Component {
    /* Xử lý nodejs tại component này */
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false, // kiểm tra đã login trước khi đặt vé hay chưa
        };
    };
    showMovie = () => {
        let list_movie = JSON.parse(localStorage.getItem('movie'));
        console.log(list_movie);
        let list_sort = list_movie.sort(function(a, b) {
            return a.view - b.view;
        })
        console.log(list_sort)
        const movies = list_sort.map((item, key) => {
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
                            <Button style={{ marginLeft: '5px' }} variant="text"><Link to="/Booking" id="btn-muave">Mua Vé</Link></Button>
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
                        <Button style={{ marginLeft: '5px' }} variant="text">Mua Vé</Button>
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