import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "./../../../store";
import "./channel-9.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";
import medLogo from "./../../../assets/img/channel-9/meditation.jpg";
import bruceLeeVideo from "./../../../assets/video/bruce-lee.mp4";
import ericThomasVideo from "./../../../assets/video/eric-thomas.mp4";
import davidGogginsVideo from "./../../../assets/video/david-goggins.mp4";
import joeDispenzaVideo from "./../../../assets/video/joe-dispenza.mp4";

export default function Channel9(props) {
  const videoRef = useRef();
  const [store, setStore] = useContext(Context);
  const [quoteNum, setQuoteNum] = useState(1);
  const [quote, setQuote] = useState({
    quote: "Invent yourself and then re-invent yourself",
    author: "Charles Bukowski",
    position: { left: 20, top: 20 },
    secs: 10,
    video: null,
  });
  const quotes = [
    { quote: "Invent yourself and then re-invent yourself", author: "Charles Bukowski", secs: 10 },
    { quote: "Being realistic is the most commonly traveled path to mediocrity", author: "Will Smith", secs: 10 },
    {
      quote:
        "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.",
      author: "Bruce Lee",
      video: bruceLeeVideo,
      secs: 26,
    },
    {
      quote:
        "I don't count my sit-ups. I only start counting when it starts hurting. When I feel pain…. Because that is when it really counts.",
      author: "Muhammad Ali",
      secs: 10,
    },
    {
      quote: "It's one thing to make people laugh, it's another to make people smile.",
      author: "Norm Macdonald",
      secs: 10,
    },
    { quote: "Ask yourself who do you want to be….not what, but who?", author: "Arnold Schwarzenegger", secs: 10 },
    {
      quote: "Shortening your refractory period",
      author: "Joe Dispenza",
      video: joeDispenzaVideo,
      secs: 72,
    },

    {
      quote: "When I do good, I feel good When I do bad, I feel bad. That's my religion",
      author: "Abraham Lincoln",
      secs: 10,
    },

    {
      quote:
        "Fear is self-imposed. You create it, you can destroy it too. Behind every fear is the person you want to be. When fear is destroyed, it comes back as confidence.",
      author: "Greg Plitt",
      secs: 10,
    },

    {
      quote:
        "A man cannot directly choose his circumstances, but he can choose his thoughts, and so indirectly, yet surely, shape his circumstances.",
      author: "James Allen",
      secs: 10,
    },

    {
      quote: "The Lion and the Gazelle",
      author: "Eric Thomas",
      video: ericThomasVideo,
      secs: 75,
    },

    {
      quote:
        "Luck is where preparation meets opportunity. Even if you get beat 99 times out of 100. It only takes 1 time.",
      author: "The Little Giants",
      secs: 10,
    },

    {
      quote:
        "Home is not a place…it’s a feeling.” But a feeling not shared is nothing. We live in a world where people believe everybody is out to get you, but I’m telling you now. Some people are just out to love you.",
      author: "William Hollis",
      secs: 10,
    },
    {
      quote: "If you are going to try, Go all the way. Do it! Do it! , All the way!, All the way!",
      author: "Charles Bukowski",
      secs: 10,
    },

    {
      quote: "Money is a beautiful thing… but if you are not enough without it you will never be enough with it.",
      author: "John Candy",
      secs: 10,
    },
    {
      quote: "Get out of your comfort zone",
      author: "David Goggins",
      video: davidGogginsVideo,
      secs: 64,
    },
    {
      quote: "Absorb what is useful. Discard what is useless. Add what is essentially your own.",
      author: "Bruce Lee",
      secs: 10,
    },
    {
      quote:
        "Pain is temporary. It may last a minute, or an hour, or a day, or even a year, but eventually it will subside and something else will take its place. If I quit, however, it lasts forever.",
      author: "Lance Armstrong",
      secs: 10,
    },
    { quote: "Never put passion in front of principle, even if you win, you’ll lose", author: "Mr. Miyagi", secs: 10 },
    { quote: "A life inherited is one not lived", author: "James Hooper", secs: 10 },
    {
      quote: "USA is a campaign of fear and consumption. Keep everyone afraid and they will consume",
      author: "Marylin Manson",
      secs: 10,
    },
  ];
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // error in rotating to the end
  useEffect(() => {
    let i = quoteNum === 0 ? quotes.length - 1 : quoteNum - 1;
    let timerSecs = (quotes[i].secs || 10) * 1000;

    let timer = setTimeout(() => {
      let num = quoteNum + 1;
      if (num > quotes.length - 1) {
        num = 0;
      }
      setQuoteNum(num);
      setQuote(null);
      let left = getRandomInt(5, 90),
        marginLeft = left > 50 ? -300 : 0;

      setQuote({
        ...quotes[quoteNum],
        position: { left: left, top: getRandomInt(5, 30), marginLeft: marginLeft },
      });
      if (quotes[quoteNum].video) {
        videoRef.current.play();
      }
    }, timerSecs);

    return () => {
      clearTimeout(timer);
    };
  }, [quoteNum]);

  return (
    <div className={`channel-9 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="9" />
        <Mute muted={store.mute} />
        <img className="meditation" alt="Meditation" src={medLogo} />
        <div className="block">
          {quote &&
            (quote.video ? (
              <video
                ref={videoRef}
                style={{
                  animationDuration: quote.secs + "s",
                  top: quote?.position?.top + "%",
                  left: quote?.position?.left + "%",
                  marginLeft: quote?.position?.marginLeft + "px",
                }}>
                <source src={quote.video} type="video/mp4" />
              </video>
            ) : (
              <span
                className="quote"
                style={{
                  animationDuration: quote.secs + "s",
                  top: quote?.position?.top + "%",
                  left: quote?.position?.left + "%",
                  marginLeft: quote?.position?.marginLeft + "px",
                }}>
                {quote.quote} <br />
                <span className="author">- {quote.author}</span>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
