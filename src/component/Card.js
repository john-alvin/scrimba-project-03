import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img
        src={`../images/${props.coverImg}`}
        alt="card"
        className="card-photo"
      />
      <p className="rating">
        <img src="../images/star.png" alt="star-icon" className="star-icon" />
        {props.stats.rating}{" "}
        <span className="usa">
          {props.stats.reviewCount} - {props.location}
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
