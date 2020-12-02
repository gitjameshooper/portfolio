import React from "react";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import "./mute.scss";

export default function Mute(props) {
  return (
    <span className={`mute-component ${props.muted ? "active" : "hidden"}`}>
      <VolumeOffIcon />{" "}
    </span>
  );
}
