import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "./../../../store";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import "./volume.scss";

export default function Volume(props) {
  const [store, setStore] = useContext(Context);
  const [volTimer, setVolTimer] = useState(null);
  const timerRef = useRef(null);
  const volBar = {
    height: store.volumeNum * 5 + "%",
  };

  useEffect(() => {
    if (!volTimer && store.showVolume) {
      timerRef.current = setTimeout(() => {
        setVolTimer(true);
        setStore((store) => {
          return { ...store, showVolume: false };
        });
      }, 5000);
    }
    return () => {
      clearTimeout(timerRef.current);
      setVolTimer(false);
    };
  }, [store.showVolume, store.volumeNum, store.mute]);
  return (
    <div className={`volume-component ${store.showVolume ? "active" : volTimer !== null ? "animate" : ""}`}>
      {store.mute && (
        <span className="icon">
          <VolumeOffIcon />
        </span>
      )}
      {!store.mute && (
        <>
          <div className="bar">
            <span className="fill" style={volBar}></span>
          </div>
          <span className="icon">
            {store.volumeNum === 0 && <VolumeOffIcon />}
            {store.volumeNum > 0 && <VolumeUpIcon />}
          </span>
          <span className="num">{store.volumeNum}</span>
        </>
      )}
    </div>
  );
}
