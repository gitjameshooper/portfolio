import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-6.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";

export default function Channel4(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-6 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="6" /> <Mute muted={store.mute} />
        Live News. Current projects. Land Accrue, Stock Trading Application
      </div>
    </div>
  );
}
