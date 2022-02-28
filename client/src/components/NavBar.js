import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import { Nav, NavLink, Bars, NavMenu, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1>Crafted Skin Bar</h1>
      <button>Services</button>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <nav>
        <Link to="/signup">Signup</Link>
      </nav>
      <nav>
        <Link to="/book">Book Now</Link>
      </nav>
      <button>Products</button>
      <button>Cart</button>
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
};

export default NavBar;
