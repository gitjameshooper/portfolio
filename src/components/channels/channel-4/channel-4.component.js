import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-4.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import fsTeamSrc from "./../../../assets/img/channel-4/flosports-team.jpg";
import fsLogoSrc from "./../../../assets/img/logos/flosports.png";

export default function Channel4(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-4 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="4" /> <Mute muted={store.mute} />
        <img alt="Flosports Logo" src={fsLogoSrc} />
        <img alt="Flosports Team" src={fsTeamSrc} />
        WOrking at Volusion and Flosports Front End Web Developer Company NameVolusion, LLC Dates EmployedMay 2015 – Sep
        2016 Employment Duration1 yr 5 mos LocationAustin, Texas Area -Programmed on the 3 main Volusion marketing
        websites: Volusion.com, Material.com, Mozu.com -Used AngularJS, vanilla JS, Node/NPM, Gulp, Prismic.io(CMS),
        Materialize, Github -Developed in a Scrum environment using continuous integration -Added third party
        APIs(Salesforce) for workflow to help sales Full-Stack Web Engineer Company NameFloSports Dates EmployedSep 2016
        – Nov 2017 Employment Duration1 yr 3 mos LocationAustin, Texas Area -Worked on the Flosports vertical sites in
        Angular 4: Flotrack.org, Flowrestling.org, Flovolleyball.tv etc… -Coded in Angular 4 building components and
        services using RXJS, Typescript, Node/NPM -Developed in a functional paradigm with version control
        systems(Github) in an agile environment -Experimented with A/B tests in Optimizely to capture analytics to help
        improve the sales funnel -Collaborated with marketing to accomplish their goals with Marketo, Kissmetrics,
        Segment, GA
      </div>
    </div>
  );
}
