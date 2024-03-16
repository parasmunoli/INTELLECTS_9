import React from "react";
import { Link } from "react-router-dom";

const onSubmit = (e) => {
  e.preventDefault();
};

const Login = ({ handleLogin }) => {
  return (
    <div className="home">
      <form action="" className="form" onSubmit={onSubmit}>
        <h1>Log In</h1>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="text" placeholder="student@standard.edu" />
        </div>
        {/* <Input
          label="Username:"
          type="text"
          placeholder="student@standard.edu"
        ></Input> */}
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input type="password" placeholder="password" />
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
