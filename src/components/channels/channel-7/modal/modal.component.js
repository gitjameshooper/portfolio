import React from "react";
import travelData from "./../../../../assets/json/travel.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CancelIcon from "@material-ui/icons/Cancel";

export default function Modal(props) {
  const style = { height: 200 };
  const items = travelData
    .filter((item) => {
      return item.id === props.modal.id;
    })
    .map((item, i) => <img key={i} alt="Vacation photo" style={style} src={item.src} className={item.pos} />);
  const settings = {
    adaptiveHeight: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="modal">
      <h4 onClick={() => props.setModal(false)}>
        <img className="flag" src={props.modal.flagSrc} alt="Flag" />
        <span className="city">{props.modal.city}</span>
        <CancelIcon className="close-icon" />
      </h4>

      <Slider {...settings}>{items}</Slider>
    </div>
  );
}
