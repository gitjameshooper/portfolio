import React from "react";
import travelData from "./../../../../assets/json/travel.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const handleDragStart = (e) => e.preventDefault();
const style = { height: 200 };
const items = travelData.map((item, i) => (
  <img key={i} alt="Hey" style={style} src={item.src} onDragStart={handleDragStart} className="yours-custom-class" />
));
const settings = {
  adaptiveHeight: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Modal(props) {
  return (
    <div className="modal">
      <h4>
        {props.modal.city}
        <img className="flag" src={props.modal.flagSrc} alt="Flag" />
      </h4>
      <Slider {...settings}>{items}</Slider>
    </div>
  );
}
