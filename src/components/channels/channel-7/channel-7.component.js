import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-7.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";

export default function Channel7(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-7 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="7" />
        <Mute muted={store.mute} /> Traveling
        <div>
          <h3>Trip to El Salvador</h3>
          San Salvador
        </div>
        <div>
          <h3>Trip to Thailand &amp; Singapore</h3>
        </div>
        <div>
          <h3>Trip to Europe</h3>
          Barcelona Spain, French Alps, France, Zurich Swizterland, Florence, Amalfi coastItaly
        </div>
        <div>
          <h3>Trip to Europe</h3>
          Germany, Munich , Prague, Czech Republic
        </div>
      </div>
    </div>
  );
}
