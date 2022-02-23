import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div id="aboutSection">
        <h3>About Me</h3>
        <img src="" alt="Picture of Kayla" />
        <p>
          Hi, I'm Kayla! I'm a master esthetician originally from Utah, I moved
          to Arizona in June of 2020 and here I am today with my own business.
        </p>
      </div>
      <div id="servicesSection">
        <h3>Why selfcare is import:</h3>
        <p>
          Taking care of yourself is important because you want to look and feel
          your best!
        </p>
        {/* <BrowserRouter> */}
        <button id="viewServicesButton">View Services</button>
        {/* </BrowserRouter> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
