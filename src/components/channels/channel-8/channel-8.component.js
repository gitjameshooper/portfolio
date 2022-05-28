import React, { useContext, useState } from "react";
import { Context } from "./../../../store";
import "./channel-8.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Volume from "./../volume/volume.component";
import espnSrc from "./../../../assets/img/logos/espn.png";
import imgSrc1 from "./../../../assets/img/channel-8/1.jpg";
import imgSrc2 from "./../../../assets/img/channel-8/2.jpg";
import imgSrc3 from "./../../../assets/img/channel-8/3.jpg";
import imgSrc4 from "./../../../assets/img/channel-8/4.jpg";
import imgSrc5 from "./../../../assets/img/channel-8/5.jpg";
import imgSrc6 from "./../../../assets/img/channel-8/6.jpg";
import imgSrc7 from "./../../../assets/img/channel-8/7.jpg";
import imgSrc8 from "./../../../assets/img/channel-8/8.jpg";
import imgSrc9 from "./../../../assets/img/channel-8/9.jpg";
import imgSrc10 from "./../../../assets/img/channel-8/10.jpg";
import imgSrc11 from "./../../../assets/img/channel-8/11.jpg";
import imgSrc12 from "./../../../assets/img/channel-8/12.jpg";
import imgSrc13 from "./../../../assets/img/channel-8/13.jpg";
import imgSrc14 from "./../../../assets/img/channel-8/14.jpg";
import imgSrc15 from "./../../../assets/img/channel-8/15.jpg";
import imgSrc16 from "./../../../assets/img/channel-8/16.jpg";
import imgSrc17 from "./../../../assets/img/channel-8/17.jpg";
import imgSrc18 from "./../../../assets/img/channel-8/18.jpg";
import imgSrc19 from "./../../../assets/img/channel-8/19.jpg";
import imgSrc20 from "./../../../assets/img/channel-8/20.jpg";
import CancelIcon from "@material-ui/icons/Cancel";

export default function Channel8(props) {
  const [store, setStore] = useContext(Context);
  const [modal, setModal] = useState(null);
  const srcs = [
    { id: 1, imgSrc: imgSrc1, alt: "Hiking Horshoe Bend", pos: "hor", align: "middle" },
    { id: 2, imgSrc: imgSrc2, alt: "Scuba Diving Thailand", pos: "vert", align: "top" },
    { id: 3, imgSrc: imgSrc3, alt: "High School Soccer Team", pos: "hor", align: "middle" },
    { id: 4, imgSrc: imgSrc4, alt: "Volleyball Tournament", pos: "hor", align: "middle" },
    { id: 5, imgSrc: imgSrc5, alt: "Surfing", pos: "hor", align: "middle" },
    { id: 6, imgSrc: imgSrc6, alt: "Color Run San Antonio", pos: "vert", align: "top" },
    { id: 7, imgSrc: imgSrc7, alt: "Flying San Diego", pos: "hor", align: "top" },
    { id: 8, imgSrc: imgSrc8, alt: "Volleyball San Diego", pos: "vert", align: "top" },
    { id: 9, imgSrc: imgSrc9, alt: "Batting Practive", pos: "vert", align: "middle" },
    { id: 10, imgSrc: imgSrc10, alt: "Rafting Colorado", pos: "hor", align: "middle" },
    { id: 11, imgSrc: imgSrc11, alt: "Hiking Zion", pos: "hor", align: "middle" },
    { id: 12, imgSrc: imgSrc12, alt: "Hang Gliding Chattanooga", pos: "hor", align: "bottom" },
    { id: 13, imgSrc: imgSrc13, alt: "High School Soccer", pos: "hor", align: "middle" },
    { id: 14, imgSrc: imgSrc14, alt: "Santa Run San Diego", pos: "hor", align: "middle" },
    { id: 15, imgSrc: imgSrc15, alt: "Ziplining Austin", pos: "hor", align: "middle" },
    { id: 16, imgSrc: imgSrc16, alt: "Austin Volleyball Team", pos: "vert", align: "middle" },
    { id: 17, imgSrc: imgSrc17, alt: "Austin Volleyball", pos: "vert", align: "middle" },
    { id: 18, imgSrc: imgSrc18, alt: "Hiking Colorado", pos: "vert", align: "middle" },
    { id: 19, imgSrc: imgSrc19, alt: "Wake Boarding Chattanooga", pos: "vert", align: "middle" },
    { id: 20, imgSrc: imgSrc20, alt: "Scuba Diving Thailand", pos: "hor", align: "middle" },
  ];
  const sports = srcs.map((item) => (
    <div
      key={item.id}
      onClick={() => setModal({ id: item.id, imgSrc: item.imgSrc, alt: item.alt, pos: item.pos })}
      className={`item ${item.align}`}>
      <img
        onLoad={(e) => {
          e.target.classList.add("loaded");
        }}
        alt={item.alt}
        src={item.imgSrc}
      />
    </div>
  ));
  return (
    <div className={`channel-8 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="8" /> <Volume />
        <img className="logo" alt="ESPN Logo" src={espnSrc} />
        <section className="sports">
          {sports}
          {modal && (
            <div className="modal">
              <span onClick={() => setModal(null)} className="cancel-btn-wrapper">
                <CancelIcon className="close-icon" />
              </span>
              <img src={modal.imgSrc} alt={modal.alt} className={modal.pos} />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
