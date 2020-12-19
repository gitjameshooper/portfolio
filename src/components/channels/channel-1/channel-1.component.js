import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-1.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Volume from "./../volume/volume.component";
import jamesSrc from "./../../../assets/img/channel-1/james.jpg";
import resumeSrc from "./../../../assets/img/channel-1/james-hooper-resume.pdf";
import gifSrc from "./../../../assets/img/channel-1/giphy-1.gif";
import lightCansSrc from "./../../../assets/img/channel-1/light-cans.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Channel1(props) {
  const [store, setStore] = useContext(Context);
  const beamsArr = [1, 2, 3, 4, 5, 6];
  const beams = beamsArr.map((val) => (
    <div key={val} className={`beams beam-${val}`}>
      <div className="inner"></div>
      <div className="inner-2"></div>
      <div className="inner-3"></div>
    </div>
  ));
  const lightsArr = [1, 2, 3, 4, 5, 6, 7];
  const lights = lightsArr.map((val) => (
    <img key={val} className={`light-cans can-${val}`} alt="Can Lights" src={lightCansSrc} />
  ));
  return (
    <div
      className={`channel-1 channels ${
        store.isTvOn && store.isTvPwrBtn ? "active animate" : store.isTvOn ? "active" : "hidden"
      } `}>
      <span className={`intro ${store.isTvOn && store.isTvPwrBtn ? "animate" : "hidden"}`}></span>
      <section className="wrapper">
        <ChannelNumber number="1" />
        <Volume />
        <div className="scene">
          <section className="ceiling">
            {lights}
            {beams}
          </section>
          <section className="left-wall">
            <div className="content">
              <div className="portrait">
                <div className="img-wrapper">
                  <img alt="James Hooper" src={jamesSrc} />
                </div>
                <a className="email" href="mailto:jamesthomashooper@gmail.com">
                  jamesthomashooper@gmail.com
                </a>
              </div>
              <p className="intro-text">
                Hello, I am James Hooper. I grew up in Chattanooga, TN and graduated from the University of TN at
                Chattanooga with a Bachelor's Degree in Business. I worked my way through college and had a great
                experience fixing up an old house. I love my hometown, but after college I knew there was something
                bigger for me waiting. So I bought a truck, said my goodbyes, and moved to Austin, TX. That is where my
                adventure began in becoming a self-taught web developer.
                <span className="contact">
                  <a href="https://www.linkedin.com/in/james-hooper-a40a9522/" rel="noreferrer" target="_blank">
                    <LinkedInIcon />
                  </a>
                  <a href="https://www.facebook.com/james.hooper.86" rel="noreferrer" target="_blank">
                    <FacebookIcon />
                  </a>
                  <a href="https://github.com/gitjameshooper" rel="noreferrer" target="_blank">
                    <GitHubIcon />
                  </a>
                  <a className="resume" href={resumeSrc} rel="noreferrer" target="_blank">
                    Resume
                  </a>
                </span>
              </p>
            </div>
          </section>
          <section className="floor"></section>

          <section className="right-wall">
            <div className="picture-monroe">
              <span className="image"></span>
              <span className="name">Marilyn Monroe</span>
            </div>
            <div className="picture-other">
              <img alt="Colorful Potrait" src={gifSrc} />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
