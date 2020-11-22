import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-5.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import sdBeachSrc from "./../../../assets/img/channel-5/james-beach.jpg";

export default function Channel5(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-5 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="5" /> <Mute muted={store.mute} />
        <img alt="James at the Beach" src={sdBeachSrc} />
        Living in San Diego and Trading Stock Trader Company Name Self-employed Dates EmployedNov 2014 – Aug 2020
        Employment Duration5 yrs 10 mos LocationAustin, Texas Area -Performing day and swing trades on US equities
        capitalizing on liquidity and volatility -Created a proprietary application in Angular 6 with stock
        APIs(ally.com, AlphaVantage.com) -Earned 80% ROI on 1,400 trades in 2018 using technical analysis -Averaged a
        Risk Reward Ratio of 2.30 and winning percentage of 60% on 350 trades in 2017
      </div>
    </div>
  );
}
