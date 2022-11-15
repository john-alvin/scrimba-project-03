import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import data from "./data";

function App() {
  const cardData = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">{cardData}</div>
    </div>
  );
}

export default App;
