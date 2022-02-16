import React from "react";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div id="mainInfoDiv">
        <p>Information about Crafted Skin Bar</p>
      </div>
      <div id="">
        <Card />
        <AboutSection />
      </div>
    </div>
  );
};

export default HomePage;
