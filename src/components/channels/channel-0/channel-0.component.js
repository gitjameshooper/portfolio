import React, { useContext, useEffect, useState } from "react";
import { Context } from "./../../../store";
import "./channel-0.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import tvStaticSrc from "./../../../assets/audio/tv-static.mp3";
import Volume from "./../volume/volume.component";

export default function Channel0(props) {
  const [store, setStore] = useContext(Context);
  const [loaded, setLoaded] = useState(false);
  let audio = new Audio(tvStaticSrc);

  useEffect(() => {
    if (store.isTvOn && !loaded) {
      audio.load();
      audio.loop = true;
      setLoaded(true);
    }

    audio.play();
    audio.volume = store.mute ? 0 : (store.volumeNum * 5) / 100;

    return () => {
      audio.pause();
    };
  }, [store.mute, store.volumeNum]);

  return (
    <section className={`channel-0 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <ChannelNumber number="0" />
      <Volume />
    </section>
  );
}
