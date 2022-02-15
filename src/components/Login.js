import React, { useState } from "react";
import LoginButton from "./Buttons/LoginButton";

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values) => {
        axios.post('/login', {
            values
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err.res.data));
    }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
        type="text"
        name="email"
        onChange={}
        value={}
        placeholder='Email'
        />
        <input
        type="text"
        name="password"
        onChange={}
        value={}
        placeholder='Password'
        />
      </form>
      <LoginButton onClick={onSubmit} />
    </div>
  );
};

export default Login;