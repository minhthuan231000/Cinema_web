import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'
import images from '../../image'
import content from '../content.json'
class Movies extends Component {
    /* Xử lý nodejs tại component này */
    constructor(props) {
        super(props);
        this.state = {
            films : [
            {
                id : 1,
                name : "Avenger Endgame",
                content : content["1"],
                url : images['Avenger_Endgame.jpg']
                
            },
            {
                id : 2,
                name : "Bố Già 2021",
                content : content["2"],
                url : images['BoGia_2021.jpg']
            },
            {
                id : 3,
                name : "Conan Movie 24",
                content : content["3"],
                url : images['Conan_Movie_24.jpg']
            },
            {
                id : 4,
                name : "Godzilla Vs Kong",
                content : content["4"],
                url : images['Godzilla_Vs_Kong.jpg']
            },
            {
                id : 5,
                name : "Lật Mặt 48h",
                content : content["5"],
                url : images['Lat_Mat_48h.jpg']
            },
            {
                id : 6,
                name : "Bàn Tay Diệt Quỷ",
                content : content["6"],
                url : images['Ban_Tay_Diet_Quy']
            },
            {
                id : 7,
                name : "Bàn Tay Diệt Quỷ",
                content : content["6"],
                url : images['Ban_Tay_Diet_Quy']
            },
            {
                id : 8,
                name : "Godzilla Vs Kong",
                content : content["4"],
                url : images['Godzilla_Vs_Kong.jpg']
            },
            {
                id : 9,
                name : "Bố Già 2021",
                content : content["2"],
                url : images['BoGia_2021.jpg']
            },
            {
                id : 10,
                name : "Conan Movie 24",
                content : content["3"],
                url : images['Conan_Movie_24.jpg']
            },
            {
                id : 11,
                name : "Avenger Endgame",
                content : content["1"],
                url : images['Avenger_Endgame.jpg']
                
            },
            {
                id : 12,
                name : "Lật Mặt 48h",
                content : content["5"],
                url : images['Lat_Mat_48h.jpg']
            }
        ]}
    };
    random
    showMovie = (number) => {
        const movies = this.state.films.map((item, key) => {
            if(item.id < 7){
                return (
                <Card key={key}>
                    <Card.Img variant="top" src={ item.url.default } />
                    <Card.Body id="Card_Body">
                        <Card.Title>{ item.name }</Card.Title>
                        <Card.Text id="Card_Text" style={{ textAlign: 'left', maxHeight: '90px' }}>
                        { item.content }
                        </Card.Text>
                        <Button variant="primary">Trailer</Button>
                        <Button style={{ marginLeft: '5px' }} variant="text">Mua Vé</Button>
                        <Card.Footer>
                        <small className="text-muted">Last updated {Math.floor(Math.random() * 10) + 1} mins ago</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>);
            }
            return (<Card key={key}>
                    <Card.Body id="Card_Body">
                        <Card.Title>{ item.name }</Card.Title>
                        <Card.Text id="Card_Text" style={{ textAlign: 'left', maxHeight: '90px' }}>
                        { item.content }
                        </Card.Text>
                        <Button variant="primary">Trailer</Button>
                        <Button style={{ marginLeft: '5px' }} variant="text">Mua Vé</Button>
                        <Card.Footer>
                        <small className="text-muted">Last updated {Math.floor(Math.random() * 10)+ 1} mins ago</small>
                        </Card.Footer>
                    </Card.Body>
                    <Card.Img variant="bottom" src={ item.url.default } />
            </Card>)
        })
        return movies;
    }
    render() {
        return (
            <div className="List_movies">
                {this.showMovie(3)}
            </div>
        );
    }
}

export default Movies;
