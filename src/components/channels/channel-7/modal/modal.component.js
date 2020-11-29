import React from "react";
import travelData from "./../../../../assets/json/travel.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CancelIcon from "@material-ui/icons/Cancel";

export default function Modal(props) {
  const style = { height: 200 };
  const items = travelData.map((item, i) => (
    <img key={i} alt="Hey" style={style} src={item.src} className="yours-custom-class" />
  ));
  const settings = {
    adaptiveHeight: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="modal">
      <h4>
        <span className="city">{props.modal.city}</span>
        <img className="flag" src={props.modal.flagSrc} alt="Flag" />
      </h4>
      <CancelIcon onClick={() => props.setModal(false)} className="close-icon" />
      <Slider {...settings}>{items}</Slider>
    </div>
  );
}
