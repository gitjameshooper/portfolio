import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./../../../store";
import "./channel-1.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import jamesSrc from "./../../../assets/img/channel-1/james-3.jpg";
import gifSrc from "./../../../assets/img/channel-1/giphy.gif";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import introVid from "./../../../assets/video/intro-loop.mp4";

export default function Channel1(props) {
  const [store, setStore] = useContext(Context);
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   videoRef.current.playbackRate = 2;
  //   console.log(videoRef.current.playbackRate);
  // });
  return (
    <div
      className={`channel-1 channels ${
        store.isTvOn && store.isTvPwrBtn ? "active animate" : store.isTvOn ? "active" : "hidden"
      } `}>
      <span className={`intro ${store.isTvOn && store.isTvPwrBtn ? "animate" : "hidden"}`}></span>
      <section className="wrapper">
        <ChannelNumber number="1" />
        <Mute muted={store.mute} />
        <div className="scene">
          <div className="top">
            <div className="beam beam-1">
              <div className="inner"></div>
              <div className="inner-2"></div>
              <div className="inner-3"></div>
            </div>
            <div className="beam beam-2">
              <div className="inner"></div>
              <div className="inner-2"></div>
              <div className="inner-3"></div>
            </div>
            <div className="beam beam-3">
              <div className="inner"></div>
              <div className="inner-2"></div>
              <div className="inner-3"></div>
            </div>
            <div className="beam beam-4">
              <div className="inner"></div>
              <div className="inner-2"></div>
              <div className="inner-3"></div>
            </div>
          </div>
          <div className="left">
            <div className="content">
              <div className="portrait">
                <div className="img-wrapper">
                  <img alt="James Hooper" src={jamesSrc} />
                </div>
                <a className="email" href="mailto:jamesthomashooper@gmail.com" target="_new">
                  jamesthomashooper@gmail.com
                </a>
              </div>
              <p>
                Hello, I am James Hooper. I grew up in Chattanoga, TN a beautiful city nested between 2 mountains with a
                river running through it. I attended The University of Tenn. at Chattanooga and graduated with a
                Bachelor's Degree in Business. I worked my way through college and had a great experience fixing up a
                house. I love the city, but after college I knew there was something bigger for me. So I bought a truck,
                said my goodbyes, and moved to Austin, TX.
              </p>
              <div className="contact">
                <a href="https://www.linkedin.com/in/james-hooper-a40a9522/">
                  <LinkedInIcon />
                </a>
                <a href="https://www.facebook.com/james.hooper.86">
                  <FacebookIcon />
                </a>
                <a href="https://github.com/gitjameshooper">
                  <GitHubIcon />
                </a>
                <span>
                  <GetAppIcon /> Resume
                </span>
              </div>
            </div>
          </div>
          <div className="floor"></div>

          <div className="right">
            <div className="picture">
              <img src={gifSrc} />
              {/* <video ref={videoRef} autoPlay muted loop>
                <source src={introVid} type="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
