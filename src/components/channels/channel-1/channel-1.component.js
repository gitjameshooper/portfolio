import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-1.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import jamesSrc from "./../../../assets/img/channel-1/james.jpg";
import resumeSrc from "./../../../assets/img/channel-1/james-hooper-resume.pdf";
import gifSrc from "./../../../assets/img/channel-1/giphy-1.gif";
import lightCansSrc from "./../../../assets/img/channel-1/light-cans.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";

export default function Channel1(props) {
  const [store, setStore] = useContext(Context);
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
          <div className="ceiling">
            <img className="light-cans can-1" alt="Can Lights" src={lightCansSrc} />
            <img className="light-cans can-2" alt="Can Lights" src={lightCansSrc} />
            <img className="light-cans can-3" alt="Can Lights" src={lightCansSrc} />
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
          <div className="left-wall">
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
                <a href={resumeSrc} rel="noreferrer" target="_blank">
                  <GetAppIcon /> Resume
                </a>
              </div>
            </div>
          </div>
          <div className="floor"></div>

          <div className="right-wall">
            <div className="picture">
              <span className="image"></span>
              <span className="name">Marilyn Monroe</span>
            </div>
            <div className="picture">
              <img alt="Colorful Potrait" src={gifSrc} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
