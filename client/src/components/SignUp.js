import React, { useState } from "react";
import SignUpButton from "./Buttons/SignUpButton";
import axios from "axios";
import NavBar from "./NavBar";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    axios
      .post("/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        // Make some kind of sign in alert?
      });
  };

  return (
    <div>
      <NavBar />
      <h2>Sign up</h2>
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
      <SignUpButton onClick={onSubmit} />
    </div>
  );
};

export default SignUp;
