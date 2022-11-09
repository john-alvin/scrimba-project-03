import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";

import photoOne from "./images/photo-01.png";
import photoSecond from "./images/photo-02.png";
import photoThird from "./images/photo-03.png";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Card
          img={photoOne}
          status="Sold Out"
          rating="5.0"
          reviewCount="(6)"
          country="USA"
          title="Life lessons with Katie Zaferes"
          price="$136"
        />
        <Card
          img={photoSecond}
          status="Restocking"
          rating="4.0"
          reviewCount="(3)"
          country="Canada"
          title="Learn wedding photography"
          price="$126"
        />
        <Card
          img={photoThird}
          status="On Stock"
          rating="4.2"
          reviewCount="(7)"
          country="Japan"
          title="Group Mountain Biking"
          price="$89"
        />
      </div>
    </div>
  );
}

export default App;
