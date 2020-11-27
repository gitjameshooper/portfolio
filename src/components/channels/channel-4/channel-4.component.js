import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-4.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import volLogoSrc from "./../../../assets/img/channel-4/volusion-logo.png";
import volWebSrc from "./../../../assets/img/channel-4/volusion-website.png";

export default function Channel4(props) {
  const [store, setStore] = useContext(Context);
  const raysArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const rays = raysArr.map((i) => <span key={i} className={`ray ray-${i}`}></span>);
  return (
    <div className={`channel-4 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="4" /> <Mute muted={store.mute} />
        <div className="block-group">
          <img className="block logo" alt="Volusion Logo" src={volLogoSrc} />
          <div className="block block-1">
            <h3 className="role">Role</h3>
            <div className="content">
              <span>
                <b>Title: </b>Front End Developer
              </span>
              <br />
              <span>
                <b>Employed: </b> May 2015 – Sep 2016
              </span>
              <br />
              <span>
                <b>Location: </b>Austin, Texas
              </span>
            </div>
          </div>
          <div className="block block-2">
            <h3 className="skills">Skills</h3>
            <ul className="content">
              <li>Programmed on the 3 main Volusion marketing websites: Volusion.com, Material.com, Mozu.com</li>
              <li>Used AngularJS, vanilla JS, Node/NPM, Gulp, Prismic.io(CMS), Materialize, Github</li>
              <li>Developed in a Scrum environment using continuous integration</li>
              <li>Added third party APIs(Salesforce) for workflow to help sales</li>
            </ul>
          </div>
          <div className="block block-3">
            <h3 className="company">Company/Team</h3>
            <p className="content">Volusion is an eCommerce company.</p>
          </div>
        </div>
        <div className="sun">
          <div className="ray-box">{rays}</div>
        </div>
        <div className="projects">
          <div className="website active">
            <a target="_blank" href="https://www.volusion.com/v1/">
              <img src={volWebSrc} />
            </a>
            <a className="link" target="_blank" href="https://www.volusion.com/v1/">
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
