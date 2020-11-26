import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import travelData from "./../../../../assets/json/travel.json";

const handleDragStart = (e) => e.preventDefault();
const style = { height: 200 };
const items = travelData.map((item) => (
  <img alt="Hey" style={style} src={item.src} onDragStart={handleDragStart} className="yours-custom-class" />
));
// const items = [
//   <img alt="Hey" src={travelData[0].src} onDragStart={handleDragStart} className="yours-custom-class" />,
//   <img alt="Hey" src={a[1].src} onDragStart={handleDragStart} className="yours-custom-class" />,
// ];

export default function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.modal.city}</h4>
      <img src={props.modal.flagSrc} alt="Flag" />
      <AliceCarousel autoHeight autoWidth mouseTracking items={items} />
    </div>
  );
}
