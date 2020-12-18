import React, { useContext, useState, useEffect } from "react";
import { Context } from "./../../../store";
import "./channel-6.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import lcSrc from "./../../../assets/img/channel-6/land-accrue-web.jpg";

export default function Channel6(props) {
  const [store, setStore] = useContext(Context);
  const [chuck, setChuck] = useState(false);
  const time = () => {
    let t = new Date().toLocaleTimeString();
    let arr = t.split(" ");
    let arr2 = arr[0].split(":");
    return arr2[0] + ":" + arr2[1] + " " + arr[1];
  };
  useEffect(() => {
    let animTimer = setTimeout(() => {
      setChuck(true);
    }, 2000);

    return () => {
      clearTimeout(animTimer);
    };
  }, []);
  return (
    <div className={`channel-6 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="6" /> <Mute muted={store.mute} />
        <div className="location">
          <span className="city">Austin, TX</span>
          <span className="time">{time()}</span>
        </div>
        {chuck && <img alt="Chuck the Reporter" className="chuck" src={`./../assets/img/chuck.gif?${Math.random()}`} />}
        <section className="projects">
          <a target="_blank" rel="noreferrer" href="https://glacial-oasis-04139.herokuapp.com/">
            <img
              onLoad={(e) => {
                e.target.classList.add("loaded");
              }}
              src={lcSrc}
              alt="Land Accrue"
            />
            <span className="caption">Land Accrue App</span>
          </a>
        </section>
        <div className="info">
          <h3>Breaking News</h3>
          <div className="details">
            <span className="person">Chuck Stevens</span>
            <span className="subject">Land Accrue project is finished</span>
          </div>
        </div>
      </div>
    </div>
  );
}
