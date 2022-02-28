import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import { Nav, NavLink, Bars, NavMenu, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      {/* <nav>
        <Link to="/services">Services</Link>
      </nav> */}
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <nav>
        <Link to="/signup">Signup</Link>
      </nav>
      <nav>
        <Link to="/book">Book Now</Link>
      </nav>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
      <nav>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default NavBar;
