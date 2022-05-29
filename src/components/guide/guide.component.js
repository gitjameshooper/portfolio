import React, { useContext } from "react";
import { Context } from "./../../store";
import { useHistory } from "react-router-dom";
import "./guide.scss";
import cdLogo from "./../../assets/img/logos/cart-designers.png";
import floLogo from "./../../assets/img/logos/flosports.png";
import sfLogo from "./../../assets/img/logos/spredfast.jpg";
import tcLogo from "./../../assets/img/logos/travel-channel.svg";
import espnLogo from "./../../assets/img/logos/espn.png";
import netLogo from "./../../assets/img/logos/netflix.jpg";
import inspLogo from "./../../assets/img/logos/insp.jpg";
import volLogo from "./../../assets/img/logos/volusion.jpg";
import austinLogo from "./../../assets/img/logos/austin.jpg";
import newsLogo from "./../../assets/img/logos/news.png";
import CancelIcon from "@material-ui/icons/Cancel";

export default function Guide(props) {
  let history = useHistory();
  const [store, setStore] = useContext(Context);
  const guidelist = [
    {
      name: "About Me",
      channel: 1,
      href: "/channel-1",
      alt: "University of TN at Chattanooga Logo",
      imgSrc: austinLogo,
      info: "Intro and Contact Information",
    },
    {
      name: "Cart Designers",
      channel: 2,
      href: "/channel-2",
      alt: "Cart Designers Logo",
      imgSrc: cdLogo,
      info: "Work at Cart Designers",
    },
    {
      name: "Spredfast",
      channel: 3,
      href: "/channel-3",
      alt: "Spredfast Logo",
      imgSrc: sfLogo,
      info: "Work at Spredfast",
    },
    {
      name: "Volusion",
      channel: 4,
      href: "/channel-4",
      alt: "Volusion Logo",
      imgSrc: volLogo,
      info: "Work at Volusion",
    },
    {
      name: "Flosports",
      channel: 5,
      href: "/channel-5",
      alt: "Flosporst Logo",
      imgSrc: floLogo,
      info: "Work at Flosports",
    },
    {
      name: "Live News",
      channel: 6,
      href: "/channel-6",
      alt: "Live News Logo",
      imgSrc: newsLogo,
      info: "The latest projects I have been working on.",
    },
    {
      name: "Travel",
      channel: 7,
      href: "/channel-7",
      alt: "Travel Logo",
      imgSrc: tcLogo,
      info: "Where my sense of adventure has taken me.",
    },
    { name: "Sports", channel: 8, href: "/channel-8", imgSrc: espnLogo, info: "Sports and activities I enjoy" },
    { name: "Inspiration", channel: 9, href: "/channel-9", imgSrc: inspLogo, info: "People who inspire and I admire" },
    {
      name: "Netflix",
      channel: "N",
      alt: "Netflix Logo",
      href: "/netflix",
      imgSrc: netLogo,
      info: "Sit back and chill with a movie and some popcorn",
    },
  ];

  const btnClick = (e, btnName, path, channel) => {
    if (e) {
      e.preventDefault();
    }
    setStore({ ...store, guide: false, channel: channel });
    if (path) {
      history.push(path);
    }
  };
  const channels = guidelist.map((x) => (
    <li key={x.channel} className={`guide-channel-${x.channel}`}>
      <a href={x.href} onClick={(e) => btnClick(e, `btn-${x.channel}`, x.href, x.channel)}>
        <span className="guide-logo">
          <img alt={x.alt} src={x.imgSrc} />
        </span>
        <span className="guide-number">{x.channel}</span>
        <span className="guide-name">{x.name}</span>
        <span className="guide-info">{x.info}</span>
      </a>
    </li>
  ));

  return (
    <div className={`guide-component ${store.guide ? "active" : "hidden"}`}>
      <span onClick={() => btnClick(null, "btn-close")} className="close-btn">
        <CancelIcon className="close-icon" />
      </span>
      <ul>{channels}</ul>
    </div>
  );
}
