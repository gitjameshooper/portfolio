import React from "react";
import "./rays.scss";

export default function Rays(props) {
  const rays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => <span key={i} className={`ray ray-${i}`}></span>);
  return (
    <section className="sun">
      <div className="ray-box">{rays}</div>
    </section>
  );
}
