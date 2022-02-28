import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Booking from "./components/Booking";
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
      </Routes>
    </div>
    // <HomePage />
  );
}

export default App;
