import React from "react";
import Input from "../Components/Input";
const Signup = () => {
  return (
    <div className="home">
      <form action="" className="form">
        <h1>Sign up</h1>
        <div className="form-group">
          <Input
            label="First Name"
            type="text"
            placeholder="First Name"
          ></Input>
        </div>
        <div className="form-group">
          <Input label="Last Name" type="text" placeholder="Last Name"></Input>
        </div>
        <div className="form-group">
          <Input
            label="Email"
            type="text"
            placeholder="student@standard.edu"
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Phone"
            type="text"
            placeholder="Enter Your Phone Number"
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Password"
            type="password"
            placeholder="Password"
          ></Input>
        </div>
        <div className="form-group">
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
          ></Input>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
