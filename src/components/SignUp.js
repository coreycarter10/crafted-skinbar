import React, { useState } from "react";
import axios from "axios";
import "../Buttons.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    axios
      .post("/api/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        alert("Signup successful");
        console.log(res.data);
        // Make some kind of sign in alert?
      });
  };

  return (
    <div id="signupDiv">
      <h2>Create an account</h2>
      <form>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="First name"
          required
        />
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Last name"
          required
        />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        />
      </form>
      <button onClick={() => onSubmit()} className="button">
        Signup
      </button>
    </div>
  );
};

export default SignUp;
