import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-2.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import cdLogoSrc from "./../../../assets/img/logos/cart-designers.png";

// First tech job and making a portfolio 	WOrking at Cart Designers
export default function Channel2(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-2 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="2" />
        <Mute muted={store.mute} />
        <h3>Who is Cart Designers</h3>
        <img alt="Cart Designers Logo" src={cdLogoSrc} />
        <p>
          Cart Designers is an Austin e-commerce design and development agency. We are all about design. We are serious
          about success. Check out our team! We design and build web solutions that help grow businesses. E-commerce is
          the way of the future and important sales can be lost when businesses do not have the proper systems. All your
          Austin e-commerce needs can be handled by our team below!
        </p>
        <h3>My Role</h3>
        <p>
          Web Developer Company NameCart Designers Dates EmployedApr 2013 – Oct 2013 Employment Duration7 mos
          LocationAustin, Texas Area -Built websites for small to midsize ecommerce businesses with HTML, CSS, PHP,
          JS(ES5) -Used photoshop designs to create pixel perfect BigCommerce and Wordpress sites. -Created a better
          client-side user experience using jQuery and Javascript. -Sent AJAX API calls to pull third party data into
          the websites.
        </p>
      </div>
    </div>
  );
}
