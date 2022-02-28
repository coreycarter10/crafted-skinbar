import React from "react";

const HomePage = () => {
  return (
    <div id="homeDiv">
      <img id="homeLogo" src={require("../assets/Crafted.png")} />
      <div id="aboutSection">
        <h3>About Me</h3>
        <img src="" alt="Picture of Kayla" />
        <p>
          Hi, I'm Kayla! I'm a master esthetician originally from Utah, I moved
          to Arizona in June of 2020 and here I am today with my own business.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
