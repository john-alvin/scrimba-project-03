import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import data from "./data";

function App() {
  const cardData = data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="container">{cardData}</div>
      <Hero />
    </div>
  );
}

export default App;
