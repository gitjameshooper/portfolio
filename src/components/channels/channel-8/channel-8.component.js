import React, { useContext, useState } from "react";
import { Context } from "./../../../store";
import "./channel-8.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
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
    { imgSrc: imgSrc1, alt: "Hiking" },
    { imgSrc: imgSrc2, alt: "Hiking" },
    { imgSrc: imgSrc3, alt: "Hiking" },
    { imgSrc: imgSrc4, alt: "Hiking" },
    { imgSrc: imgSrc5, alt: "Hiking" },
    { imgSrc: imgSrc6, alt: "Hiking" },
    { imgSrc: imgSrc7, alt: "Hiking" },
    { imgSrc: imgSrc8, alt: "Hiking" },
    { imgSrc: imgSrc9, alt: "Hiking" },
    { imgSrc: imgSrc10, alt: "Hiking" },
    { imgSrc: imgSrc11, alt: "Hiking" },
    { imgSrc: imgSrc12, alt: "Hiking" },
    { imgSrc: imgSrc13, alt: "Hiking" },
    { imgSrc: imgSrc14, alt: "" },
    { imgSrc: imgSrc15, alt: "" },
    { imgSrc: imgSrc16, alt: "" },
    { imgSrc: imgSrc17, alt: "" },
    { imgSrc: imgSrc18, alt: "" },
    { imgSrc: imgSrc19, alt: "" },
    { imgSrc: imgSrc20, alt: "" },
  ];
  const sports = srcs.map((item, i) => (
    <div key={i} onClick={() => setModal(item.imgSrc)} className="item">
      <img alt={item.alt} src={item.imgSrc} />
    </div>
  ));
  return (
    <div className={`channel-8 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="8" /> <Mute muted={store.mute} />
        <img className="logo" alt="ESPN Logo" src={espnSrc} />
        <div className="projects">
          {sports}
          {modal && (
            <div className="modal">
              <CancelIcon onClick={() => setModal(null)} className="close-icon" />
              <img src={modal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
