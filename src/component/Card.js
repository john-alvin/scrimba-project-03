import React from "react";
import photoOne from "../images/photo-01.png";
import starIcon from "../images/star.png";
function Card() {
  return (
    <div className="card">
      <button className="button">Sold Out</button>
      <img src={photoOne} alt="card" className="card-photo" />
      <p className="rating">
        <img src={starIcon} alt="star-icon" className="star-icon" />
        5.0 <span className="usa">(6) - USA</span>
      </p>
      <p className="title">Life lessons with Katie Zaferes</p>
      <p className="price">
        <span className="from">From $136</span> / person
      </p>
    </div>
  );
}

export default Card;
