import React from "react";
import groupImage from "../images/group.png";

function Hero() {
  return (
    <main>
      <div className="group">
        <img src={groupImage} alt="group" className="group-image" />
      </div>
      <div className="description">
        <h1>Online Experience</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  );
}

export default Hero;
