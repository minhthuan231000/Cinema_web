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
    const list = this.state.films.map((item, key) => 
    <div key={item.id} className="slide-item">
      <a href={item.name }>
        <img className="img-poster" src= {item.url.default} alt="IMG" />
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