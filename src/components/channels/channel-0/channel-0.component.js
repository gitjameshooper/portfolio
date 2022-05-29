import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./../../../store";
import "./channel-0.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import tvStaticSrc from "./../../../assets/audio/tv-static.mp3";
import Volume from "./../volume/volume.component";

export default function Channel0(props) {
  const [store, setStore] = useContext(Context);
  const audio = useRef(null);

  useEffect(() => {
    if (store.isTvOn && !audio.current) {
      audio.current = new Audio(tvStaticSrc);
      audio.current.load();
      audio.current.loop = true;
    }
    if (audio.current) {
      audio.current.play();
      audio.current.volume = store.mute ? 0 : (store.volumeNum * 5) / 100;
    }
    return () => {
      audio.current.pause();
    };
  }, [store.mute, store.volumeNum]);

  return (
    <section className={`channel-0 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <ChannelNumber number="0" />
      <Volume />
    </section>
  );
}
