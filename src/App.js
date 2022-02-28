import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Booking from "./components/Booking";
import Products from "./components/Products";
import ServicePage from "./components/ServicePage";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/book" exact element={<Booking />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/services" exact element={<ServicePage />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
      <Footer />
    </div>
    // <HomePage />
  );
}

export default App;
