import React, { useContext, useState } from "react";
import { Context } from "./../../../store";
import "./channel-7.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Volume from "./../volume/volume.component";
import Globe from "./globe/globe.component";
import Modal from "./modal/modal.component";
import tcSrc from "./../../../assets/img/logos/travel-channel.svg";

export default function Channel7(props) {
  const [store, setStore] = useContext(Context);
  const [modal, setModal] = useState(null);

  return (
    <div className={`channel-7 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="7" />
        <Volume />
        {modal && <Modal setModal={setModal} modal={modal} />}
        <div className="globe-wrapper">
          <img className="logo" src={tcSrc} alt="Travel Channel Logo" />
          <Globe setModal={setModal} />
        </div>
      </div>
    </div>
  );
}
