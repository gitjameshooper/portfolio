import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-4.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import teamSrc from "./../../../assets/img/channel-4/team.jpg";
import Volume from "./../volume/volume.component";
import Rays from "./../rays/rays.component";
import volLogoSrc from "./../../../assets/img/channel-4/volusion-logo.png";
import volWebSrc from "./../../../assets/img/channel-4/volusion-website.jpg";

export default function Channel4(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-4 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="4" /> <Volume />
        <section className="block-group">
          <div className="block block-1">
            <img className="logo" alt="Volusion Logo" src={volLogoSrc} />
          </div>
          <div className="block block-2">
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
          <div className="block block-3">
            <h3 className="experience">Experience</h3>
            <ul className="content">
              <li>Programmed on the 3 main Volusion marketing websites: Volusion.com, Material.com, Mozu.com</li>
              <li>
                Used AngularJS, vanilla JS, Node/NPM, Gulp, Prismic.io(CMS), Materialize, Github, Optimizely,
                Browserstack
              </li>
              <li>Developed in a Scrum environment with JIRA ticketing using continuous integration</li>
              <li>Added third party APIs(Salesforce) for workflow to help increase sales</li>
            </ul>
          </div>
          <div className="block block-4">
            <h3 className="company">Company/Team</h3>
            <p className="content">
              Volusion is an all-in-one ecommerce solution offering 24/7 support to proactively help entrepreneurs build
              and manage successful online businesses. Since 1999, our dedicated team of developers, marketers,
              designers, and technical support experts have been passionate about helping merchants operate and grow
              their stores, whether startup- or enterprise-level. Two decades later, Volusion has earned dozens of
              accolades and powered over 180,000 successful online businesses.
              <img alt="Volusion Team" src={teamSrc} />
            </p>
          </div>
        </section>
        <Rays />
        <section className="projects">
          <div className="website active">
            <a target="_blank" href="https://www.volusion.com/v1/" rel="noreferrer">
              <img alt="Volusion Website" src={volWebSrc} />
            </a>
            <a className="link" target="_blank" href="https://www.volusion.com/v1/" rel="noreferrer">
              Visit Project
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
