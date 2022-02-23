import React, { useState } from "react";
import LoginButton from "./Buttons/LoginButton";
import NavBar from "./NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    axios
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        // Make a logged in page?
      })
      .catch((err) => console.log(err.res.data));
  };

  return (
    <div>
      {/* <NavBar /> */}
      <h2>Login</h2>
      <form>
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
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </form>
      <LoginButton onClick={onSubmit} />
    </div>
  );
};

export default Login;
