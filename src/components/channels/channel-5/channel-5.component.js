import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-5.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Volume from "./../volume/volume.component";
import Rays from "./../rays/rays.component";
import fsTeamSrc from "./../../../assets/img/channel-5/flosports-team.jpg";
import fsLogoSrc from "./../../../assets/img/logos/flosports.png";
import fsWebSrc from "./../../../assets/img/channel-5/flosports-web.jpg";

export default function Channel5(props) {
  const [store, setStore] = useContext(Context);
  return (
    <div className={`channel-5 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="5" /> <Volume />
        <section className="block-group">
          <div className="block block-1">
            <img className="logo" alt="Flosports Logo" src={fsLogoSrc} />
          </div>
          <div className="block block-2">
            <h3 className="role">Role</h3>
            <div className="content">
              <span>
                <b>Title: </b>Full-Stack Web Engineer
              </span>
              <br />
              <span>
                <b>Employed: </b> Sep 2016 – Nov 2017
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
                Worked on the Flosports vertical sites in Angular 4: Flotrack.org, Flowrestling.org, Flovolleyball.tv
              </li>
              <li>
                Coded in Angular 4 in a complete rebuild of the application creating custom components and services
                using RXJS, Typescript(ES6), Node/NPM
              </li>
              <li>Developed in a functional paradigm with version control systems(Github) in an agile environment</li>
              <li>Experimented with A/B tests in Optimizely to capture analytics to help improve the sales funnel</li>
              <li>Collaborated with marketing to accomplish their goals with Marketo, Kissmetrics, Segment, GA</li>
            </ul>
          </div>
          <div className="block block-4">
            <h3 className="company">Company/Team</h3>
            <p className="content">
              Founded in 2006, FloSports is a venture-backed subscription video streaming service dedicated to sports,
              offering live and on-demand access to hundreds of thousands of competition events across 25+ vertical
              sport categories in the US and abroad. With a growing library of more than 300,000 hours of premium
              content including news, expert commentary, films, documentaries and more, FloSports has established itself
              as an innovator and leader in sports streaming. Finally, your sport has a home.
              <img alt="Flosports Team" src={fsTeamSrc} />
            </p>
          </div>
        </section>
        <Rays />
        <section className="projects">
          <div className="website active">
            <a target="_blank" href="https://www.flowrestling.org/" rel="noreferrer">
              <img alt="Flosports website" src={fsWebSrc} />
            </a>
            <a className="link" target="_blank" href="https://www.flowrestling.org/" rel="noreferrer">
              Visit Project
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
