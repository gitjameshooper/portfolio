import React, { useContext, useState, useEffect } from "react";
import { Context } from "./../../../store";
import "./channel-3.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import sfLogoSrc from "./../../../assets/img/logos/spredfast.jpg";
import devTeamSrc from "./../../../assets/img/channel-3/dev-team.jpg";
import guessSrc from "./../../../assets/img/channel-3/guess.png";
import aeroSrc from "./../../../assets/img/channel-3/aero.png";
import ibmSrc from "./../../../assets/img/channel-3/ibm.png";
import mcSrc from "./../../../assets/img/channel-3/mastercard.png";
import itvSrc from "./../../../assets/img/channel-3/itv.png";
import iheartSrc from "./../../../assets/img/channel-3/iheartradio.png";
import lasenzaSrc from "./../../../assets/img/channel-3/lasenza.png";

export default function Channel3(props) {
  const [store, setStore] = useContext(Context);
  const [websiteN, setWebsiteN] = useState(0);
  const [exitAnim, setExitAnim] = useState(false);
  const srcs = [
    { imgSrc: guessSrc, linkSrc: "http://mass-relevance-all-access.massrel.io/guess-dare-example/" },
    { imgSrc: aeroSrc, linkSrc: "http://mass-relevance-all-access.massrel.io/aero-social-now-example/" },
    { imgSrc: ibmSrc, linkSrc: "http://mass-relevance-all-access.massrel.io/ibm-smarter-example/" },
    { imgSrc: itvSrc, linkSrc: "http://mass-relevance-all-access.massrel.io/itv-goalface-example/" },
    { imgSrc: lasenzaSrc, linkSrc: "http://mass-relevance-all-access.massrel.io/la-senza-beach-example/" },
    { imgSrc: mcSrc, linkSrc: "http://mass-relevance-all-access.massrel.io/mastercard-octagon-example/" },
    { imgSrc: iheartSrc, linkSrc: "http://up.massrelevance.com/iheartradio/musicawards-2014/index.html" },
  ];
  const raysArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const rays = raysArr.map((i) => <span key={i} className={`ray ray-${i}`}></span>);
  const websites = srcs.map((item, i) => (
    <div key={i} className={`website ${websiteN === i ? "active" : "hidden"} ${exitAnim ? "spin-out" : ""}`}>
      <a rel="noreferrer" target="_blank" href={item.linkSrc}>
        <img alt="SpredFast Projects" src={item.imgSrc} />
      </a>
      <a className="link" target="_blank" rel="noreferrer" href={item.linkSrc}>
        Visit Project
      </a>
    </div>
  ));

  useEffect(() => {
    let nextTimer = setTimeout(() => {
      setExitAnim(false);
      let n = websiteN + 1;
      if (n >= srcs.length) n = 0;
      setWebsiteN(n);
    }, 10000);

    let animTimer = setTimeout(() => {
      setExitAnim(true);
    }, 8500);

    return () => {
      clearTimeout(nextTimer);
      clearTimeout(animTimer);
    };
  }, [websiteN, srcs.length]);

  return (
    <div className={`channel-3 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="3" />
        <Mute muted={store.mute} />
        <div className="block-group">
          <div className="block block-1">
            <img className="logo" alt="Spredfast Logo" src={sfLogoSrc} />
          </div>
          <div className="block block-2">
            <h3 className="role">Role</h3>
            <div className="content">
              <span>
                <b>Title: </b>Front End Developer
              </span>
              <br />
              <span>
                <b>Employed: </b> Nov 2013 – Mar 2015
              </span>
              <br />
              <span>
                <b>Location: </b>Austin, Texas
              </span>
            </div>
          </div>
          <div className="block block-3">
            <h3 className="experience">Experience</h3>
            <ul className="content">
              <li>
                UX developer for social media marketing campaigns using a curated data API to make
                visualizations/microsites
              </li>
              <li>Worked with top-tier clients such as the Oakley, MTV, iHeartradio, MasterCard, LaSenza, IBM</li>
              <li>
                Collaborated with project managers and designers in Scrum environment to meet campaign deadlines on
                tight schedules
              </li>
              <li>
                Wrote in JS(ES5), CSS3 and HTML5 with a focus on clean code, fast page loads, responsiveness -Utilized
                libraries including: Bootstrap, jQuery, Underscore.js, D3.js
              </li>
            </ul>
          </div>
          <div className="block block-4">
            <h3 className="company">Company/Team</h3>
            <p className="content">
              Spredfast is a platform for digital-first customer engagement. We are a global leader revolutionizing CX
              with software and services for digital care, messaging, chat, social marketing, and online communities.
              <img alt="Dev Team" src={devTeamSrc} />
              <span className="caption">Dev team wins Halloween contest. Bronies unite!</span>
            </p>
          </div>
        </div>
        <div className="sun">
          <div className="ray-box">{rays}</div>
        </div>
        <div className="projects">{websites}</div>
      </div>
    </div>
  );
}
