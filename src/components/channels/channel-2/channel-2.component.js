import React, { useContext, useEffect, useState } from "react";
import { Context } from "./../../../store";
import "./channel-2.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import sxswSrc from "./../../../assets/img/channel-2/sxsw.jpg";
import cdLogoSrc from "./../../../assets/img/logos/cart-designers.png";
import mmSiteSrc from "./../../../assets/img/channel-2/marthaemmanuel.png";
import oakSiteSrc from "./../../../assets/img/channel-2/oakway.png";
import waFreshSiteSrc from "./../../../assets/img/channel-2/wafresh.png";
import wildSiteSrc from "./../../../assets/img/channel-2/wildseed.png";
import engSiteSrc from "./../../../assets/img/channel-2/english.png";
import fudgeSiteSrc from "./../../../assets/img/channel-2/fudge.png";
import greensSiteSrc from "./../../../assets/img/channel-2/greensplus.png";
import haloSiteSrc from "./../../../assets/img/channel-2/halosleep.png";
import dlPrintSiteSrc from "./../../../assets/img/channel-2/dlprint.png";

// First tech job and making a portfolio 	WOrking at Cart Designers
export default function Channel2(props) {
  const [store, setStore] = useContext(Context);
  const [websiteN, setWebsiteN] = useState(0);
  const [exitAnim, setExitAnim] = useState(false);
  const srcs = [
    mmSiteSrc,
    oakSiteSrc,
    wildSiteSrc,
    waFreshSiteSrc,
    engSiteSrc,
    fudgeSiteSrc,
    greensSiteSrc,
    haloSiteSrc,
    dlPrintSiteSrc,
  ];
  const raysArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const rays = raysArr.map((i) => <span key={i} className={`ray ray-${i}`}></span>);
  const websites = srcs.map((item, i) => (
    <img
      alt="cart designers ecommerce websites"
      className={`website ${websiteN === i ? "active" : "hidden"} ${exitAnim ? "spin-out" : ""}`}
      key={i}
      src={item}
    />
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
    <div className={`channel-2 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="2" />
        <Mute muted={store.mute} />

        <section className="block-group">
          <div className="block block-1">
            <img className="logo" alt="Cart Designers Logo" src={cdLogoSrc} />
          </div>
          <div className="block block-2">
            <h3 className="role">Role</h3>
            <div className="content">
              <span>
                <b>Title: </b>Front End Developer
              </span>
              <br />
              <span>
                <b>Employed: </b> Apr 2013 – Oct 2013
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
              <li>Built eCommerce websites for small to midsize businesses with HTML, CSS, PHP, JS(ES5)</li>
              <li>Used photoshop designs to create pixel perfect responsive BigCommerce and Wordpress sites.</li>
              <li>Created a better client-side user experience using jQuery and Javascript.</li>
              <li>Utilized third-party APIs to pull data into the websites.</li>
            </ul>
          </div>
          <div className="block block-4">
            <h3 className="company">Company/Team</h3>

            <p className="content">
              Cart Designers is an Austin e-commerce design and development agency. We are all about design. We are
              serious about success. Check out our team! We design and build web solutions that help grow businesses.
              E-commerce is the way of the future and important sales can be lost when businesses do not have the proper
              systems. All your Austin e-commerce needs can be handled by our team below!
              <img alt="SXSW" src={sxswSrc} />
            </p>
          </div>
        </section>
        <section className="sun">
          <div className="ray-box">{rays}</div>
        </section>
        <section className="projects">{websites}</section>
      </div>
    </div>
  );
}
