import React, { useState } from "react";
import RegisterButton from "./Buttons/LoginButton";

const Register = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
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
      <h2>Sign up</h2>
      <form>
        <input
        type="text"
        name="firstName"
        onChange={}
        value={}
        placeholder='First name'
        />
        <input
        type="text"
        name="lastName"
        onChange={}
        value={}
        placeholder='Last name'
        />
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
      <RegisterButton onClick={onSubmit} />
    </div>
  );
};

export default Login;