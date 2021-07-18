import React, { Component } from "react";
import Slider from "react-slick";
import images from '../../image'
export default class PauseOnHover extends Component {
  constructor(props) {
    super(props);
    this.state = {
        films : [
        {
            id : 1,
            name : "Avenger Endgame",
            url : images['Avenger_Endgame.jpg']
        },
        {
            id : 2,
            name : "Bố Già 2021",
            url : images['BoGia_2021.jpg']
        },
        {
            id : 3,
            name : "Conan Movie 24",
            url : images['Conan_Movie_24.jpg']
        },
        {
            id : 4,
            name : "Godzilla Vs Kong",
            url : images['Godzilla_Vs_Kong.jpg']
        },
        {
            id : 5,
            name : "Lật Mặt 48h",
            url : images['Lat_Mat_48h.jpg']
        }
    ]}
};
ShowSliderFilm = () => {
  
    const list_movie = JSON.parse(localStorage.getItem('movie'));
    let list_sort= [];
    list_sort = list_movie.sort(function (a, b) {
        return a.opening_day - b.opening_day;
    })
    const list = list_sort.slice(0,5).map((item, key) =>
    <div key={item.id} className="slide-item">
      <a href="/">
        <img className="img-poster" src={`data:image/png;base64,${new Buffer.from(item.image.data).toString("ascii")}`}  alt="IMG" />
        <span className="title-poster"><h6>{item.name}</h6></span>
      </a>
    </div>
    );
    return list;
}
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="Sider-content">
        <Slider  {...settings}>
          { this.ShowSliderFilm() }
        </Slider>
      </div>
    );
  }
}