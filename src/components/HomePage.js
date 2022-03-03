import React from "react";

const HomePage = () => {
  return (
    <div id="homeDiv">
      <img id="homeLogo" src={require("../assets/Crafted.png")} />
      <div id="aboutSection">
        <h3>About Me</h3>
        <p>
          Hi, I'm Kayla! I'm a master esthetician originally from Utah, I moved
          to Arizona in June of 2020. I'm a certified acne specialist and laser
          technician! I specialize in medical esthetics and treatments that will
          truly transform your skin!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
