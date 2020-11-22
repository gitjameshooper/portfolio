import React, { useContext } from "react";
import { Context } from "./../../store";
import "./logo.scss";

export default function Logo() {
  const [store, setStore] = useContext(Context);
  return (
    <span className={`jh-logo ${store.isTvOn ? "hidden" : ""}`}>
      <span className="j-letter">J</span>
      <span className="h-letter">H</span>
      <span className="tv-text">TV</span>
    </span>
  );
}
