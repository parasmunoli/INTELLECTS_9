import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../User/Login_auth";

const Login = ({ username, password, setUsername, setPassword }) => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogin = () => {
    console.log("TRIGGERED");
    dispatch(loginUser());
  };
  return (
    <div className="home">
      <form action="" className="form" onSubmit={onSubmit}>
        <h1>Log In</h1>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="student@standard.edu"
          />
        </div>
        {/* <Input
          label="Username:"
          type="text"
          placeholder="student@standard.edu"
        ></Input> */}
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </div>
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
        <Link to="/signup" className="link">
          Don't Have an Account?<span> Sign up</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
