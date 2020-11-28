import React, { useContext, useState } from "react";
import { Context } from "./../../../store";
import "./channel-1.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import jamesSrc from "./../../../assets/img/channel-1/james.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

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
        <h3>Intro about growing up in chattanooga</h3>
        <h4>Contact me</h4>
        <p>512-769-0980</p>
        <a href="https://www.linkedin.com/in/james-hooper-a40a9522/">
          <LinkedInIcon />
        </a>
        <a href="https://www.facebook.com/james.hooper.86">
          <FacebookIcon />
        </a>
        <a href="https://github.com/gitjameshooper">
          <GitHubIcon />
        </a>
        <button>Download Resume</button>
        <a href="" target="_new">
          jamesthomashooper@gmail.com
        </a>
        <p>
          Hello, I am James Hooper. <img alt="James Hooper" src={jamesSrc} />I grew up in Chattanoga, TN a beautiful
          city nested between 2 mountains with a river running through it. I atteneded The University of Tenn. at
          Chattanooga and graduated with a Bachelor's Degree in Business. I worked my way through college and had a
          great experience fixing up a house. I love the city, but after college I knew there was something bigger for
          me. So I bought a truck, said my goodbyes, and moved to Austin, TX.
        </p>
        [Intro pic] [Nice picture of the city for bg] Chattanoga. Bachelor's in Business. talk about House project.
        Moving to Austin [photo of me graduating college] show a map going from Chattanooga to Austin. [picture of me
        with my green truck]
        {/* <div class="text"><p>I’m a speaker, podcaster, author, entrepreneur, and an all-around normal dude trying to make a little dent in the world

I’m married to my high school sweetheart and we have three beautiful little girls. I live in a little Barbie dream house. I love it. I wouldn’t trade lives with anyone.

So I guess you came to this page to get a little more background on who I am right? Here you go…</p></div>
<div class="scene">
  <div class="panel blue"><img src="https://m.media-amazon.com/images/I/91+ci5h3EyL._AC_SL1500_.jpg" /></div>
  <div class="floor"></div>
 
  <div class="panel red">

</div>
</div> */}
      </section>
    </div>
  );
}
