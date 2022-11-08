import React from "react";
import Airbnb from "../images/airbnb.png";

function Navbar() {
  return (
    <nav>
      <img src={Airbnb} alt="air-bnb" className="air-bnb" />
    </nav>
  );
}

export default Navbar;
