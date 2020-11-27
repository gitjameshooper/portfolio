import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-6.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import lcSrc from "./../../../assets/img/channel-6/land-accrue-web.png";

export default function Channel6(props) {
  const [store, setStore] = useContext(Context);

  const time = () => {
    let t = new Date().toLocaleTimeString();
    let arr = t.split(" ");
    let arr2 = arr[0].split(":");
    return arr2[0] + ":" + arr2[1] + " " + arr[1];
  };
  return (
    <div className={`channel-6 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="6" /> <Mute muted={store.mute} />
        <div className="location">
          <span className="city">Austin, TX</span>
          <span className="time">{time()}</span>
        </div>
        <div className="info">
          <h3>Breaking News</h3>
          <div className="details">
            <span className="person">James Hooper</span>
            <span className="subject">Land Accrue project is finished</span>
          </div>
        </div>
        <div className="projects">
          <a href="https://glacial-oasis-04139.herokuapp.com/">
            <img src={lcSrc} alt="Land Accrue" />
          </a>
          Land Accrue, Stock Trading Application Trading Stock Trader Company Name Self-employed Dates EmployedNov 2014
          – Aug 2020 Employment Duration5 yrs 10 mos LocationAustin, Texas Area -Performing day and swing trades on US
          equities capitalizing on liquidity and volatility -Created a proprietary application in Angular 6 with stock
          APIs(ally.com, AlphaVantage.com) -Earned 80% ROI on 1,400 trades in 2018 using technical analysis -Averaged a
          Risk Reward Ratio of 2.30 and winning percentage of 60% on 350 trades in 2017
        </div>
      </div>
    </div>
  );
}
