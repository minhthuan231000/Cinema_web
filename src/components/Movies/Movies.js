import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import './Movies.css'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

/* End Trailer Form */
const DOMAIN = process.env.REACT_APP_DOMAIN;
export default function MoviesOpen() {
    var [idMovie, setIDMovie] = useState(0);
    const [open, setOpen] = useState(false);
    const handleTrailer = () => {
        if (open === true) {
            return Trailer();
        }
        else {
            return ' ';
        }
    }
    const Trailer = () => {
        let list_movie = JSON.parse(localStorage.getItem('movie' || 0));
        const movies = list_movie.map((item, index) => {
            if (idMovie.toString() === item.id.toString()) {
                item.trailer = item.trailer.replace('view?usp=sharing', 'preview')
                return <div key={index} className="trailer">
                    <div className="trailer__wrap">
                        <div className="trailer__btnClose">
                            <button className="btn btn-info" onClick={() => setOpen(false)}>X</button>
                        </div>
                        <div className="trailer__clip">
                            <iframe src={item.trailer} width="100%" height="100%" title={'trailer' + index}></iframe>
                        </div>
                    </div>
                </div>
            }
            return ' '
        })
        return movies;
    }
    const getLink = (e) => {
        setOpen(true);
        setIDMovie(idMovie = e.target.id);
    }
    const check_login = async (e) => {
        const loggedInUser = cookies.get('user');
        if (loggedInUser) {
            const target = e.target;
            const request = new Request(`${DOMAIN}/api/movie/` + target.id, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
            });
            async function fetchBooks() {
                await fetch(request);
            }
            await fetchBooks();
            return window.location.href = ("/BookingForm?id=" + target.id);
        } else if (!loggedInUser) {
            alert("Please login !!!");
            return;
        }
    };
    const getFormattedDate = (date) => {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        return month + '/' + day + '/' + year;
    };
    const showMovie = () => {
        let list_movie = [];
        list_movie = JSON.parse(localStorage.getItem('movie') || 0);
        const movies = list_movie.map((item, key) => {
<<<<<<< HEAD
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
                            <Button style={{ marginLeft: '5px' }} id={item.id} variant="text" onClick={this.check_login}>Mua Vé</Button>
                            <Card.Footer>
                                <small className="text-muted">View: {item.view} </small>
                                <p></p>
                                <small className="text-muted">Open: {open}</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>);
            }

=======
            let open = getFormattedDate(new Date(item.opening_day));
>>>>>>> main
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
                        <Button variant="primary" id={item.id} onClick={getLink} >Trailer</Button>
                        <Button style={{ marginLeft: '5px' }} variant="text" id={item.id} onClick={check_login}>Mua Vé</Button>
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
    return (
        <div>
            {handleTrailer()}
            <div className="List_movies">
                {showMovie()}
            </div>
        </div>
    );
}