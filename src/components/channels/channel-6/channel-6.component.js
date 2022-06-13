import React, { useContext, useState, useEffect } from "react";
import { Context } from "./../../../store";
import "./channel-6.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Volume from "./../volume/volume.component";
import lcSrc from "./../../../assets/img/channel-6/land-accrue-web.jpg";
import tmgolfSrc from "./../../../assets/img/channel-6/taylormadegolf.jpg";
import bambuEarthSrc from "./../../../assets/img/channel-6/bambuearth.jpg";
import wbcSrc from "./../../../assets/img/channel-6/wanderingbearcoffee.jpg";
import haperWildeSrc from "./../../../assets/img/channel-6/harperwilde.jpg";
import pawSrc from "./../../../assets/img/channel-6/paw.jpg";

export default function Channel6() {
  const [store, setStore] = useContext(Context);
  const [chuck, setChuck] = useState(false);
  const [clock, setClock] = useState("");
  const [loading, setLoading] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const getTime = () => {
    let t = new Date().toLocaleTimeString();
    let arr = t.split(" ");
    let arr2 = arr[0].split(":");
    let time = arr2[0] + ":" + arr2[1] + " " + arr[1];
    setClock(time);
  };
  const slideData = [
    {
      imgSrc: tmgolfSrc,
      href: "https://www.taylormadegolf.com/",
      alt: "Taylormade Golf Website",
      caption: "Taylormade Golf",
      headline: "CRO experiments increased ROI last quarter",
    },
    {
      imgSrc: pawSrc,
      href: "https://www.paw.com/",
      alt: "Paw Website",
      caption: "Paw",
      headline: "Shopify store CRO experiments running",
    },
    {
      imgSrc: wbcSrc,
      href: "https://wanderingbearcoffee.com/",
      alt: "Wandering Bear Coffee Website",
      caption: "Wandering Bear Coffee",
      headline: "Increased conversions in Shopify store",
    },
    {
      imgSrc: haperWildeSrc,
      href: "https://harperwilde.com//",
      alt: "Harper Wilde Website",
      caption: "Harper Wilde",
      headline: "CTA game changer in CRO experiments",
    },
    {
      imgSrc: bambuEarthSrc,
      href: "https://bambuearth.com/",
      alt: "Bambu Earth Website",
      caption: "Bambu Earth",
      headline: "Success in Shopify store pricing experiment",
    },
    {
      imgSrc: lcSrc,
      href: "https://glacial-oasis-04139.herokuapp.com/",
      alt: "Land Accrue Website",
      caption: "Land Accrue",
      headline: "Land Accrue project is finished",
    },
  ];

  useEffect(() => {
    // clock
    let clockInterval;
    if (!clock) {
      getTime();
      clockInterval = setInterval(getTime, 1000);
    }
    // slide change
    let slideAnimInterval = setInterval(() => {
      setLoading(false);
      setSlideIndex((i) => {
        return i < slideData.length - 1 ? i + 1 : 0;
      });
    }, 10000);

    // Gif animation
    let animTimer;
    if (!chuck) {
      animTimer = setTimeout(() => {
        setChuck(true);
      }, 2000);
    }
    return () => {
      clearInterval(slideAnimInterval);
      clearInterval(clockInterval);
      clearTimeout(animTimer);
    };
  }, []);
  return (
    <div className={`channel-6 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="6" /> <Volume />
        <div className="location">
          <span className="city"> Austin, TX </span> <span className="time"> {clock} </span>
        </div>
        {chuck && <img alt="Chuck the Reporter" className="chuck" src="./../assets/img/chuck.gif" />}
        <section className="projects">
          <a
            target="_blank"
            rel="noreferrer"
            onLoad={() => setLoading(true)}
            className={`${loading ? "loading" : ""}`}
            href={`${slideData[slideIndex].href}`}>
            <img src={`${slideData[slideIndex].imgSrc}`} alt={`${slideData[slideIndex].alt}`} />
            <span className="caption"> {`${slideData[slideIndex].caption}`} </span>
          </a>
        </section>
        <div className="info">
          <h3> Breaking News </h3>
          <div className="details">
            <span className="person"> Chuck Stevens </span>
            <span className="headline"> {`${slideData[slideIndex].headline}`} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
