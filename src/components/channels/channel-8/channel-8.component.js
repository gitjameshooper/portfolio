import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-8.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";

export default function Channel8(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-8 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="8" /> <Mute muted={store.mute} /> Sports and activities Volleyball , Running
      </div>
    </div>
  );
}
