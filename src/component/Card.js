import React from "react";

function Card(props) {
  return (
    <div className="card">
      <button className="button">{props.status}</button>
      <img src={`../images/${props.img}`} alt="card" className="card-photo" />
      <p className="rating">
        <img src="../images/star.png" alt="star-icon" className="star-icon" />
        {props.rating}{" "}
        <span className="usa">
          {props.reviewCount} - {props.country}
        </span>
      </p>
      <p className="title">{props.title}</p>
      <p className="price">
        <span className="from">From {props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
