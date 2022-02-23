import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const NavBar = () => {
  return (
    <header>
      <h1>Crafted Skin Bar</h1>
      <button>Services</button>
      <button>Login</button>
      <button>Book now</button>
    </header>
  );
  // return (
  //   <header id="homeHeader">
  //     <div id="navbar">
  //       <nav>
  //         <ul>
  //           <li>
  //             <a href="./home.html">HOME</a>
  //           </li>
  //           <li>
  //             <a href="./home.html">SERVICES</a>
  //           </li>
  //           <li>
  //             <a href="./booking.html">BOOK NOW</a>
  //           </li>
  //           <li>
  //             <a href="./Login.js">LOGIN</a>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //   </header>
  // );
  // return (
  //   <div id="header">
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/Home" element={<HomePage />} />
  //       {/* <Route path='/services' element={<ServicePage />} */}
  //     </Routes>
  //   </div>
  // );
};

export default NavBar;
