import React from "react";
import { BsPersonFill ,BsKeyFill} from "react-icons/bs";
import "./login.css";

const Login = () => {
  return (
      <>
    <div className="login-container">
      <div className="wrapper-login">
        <div className="logo">
          {" "}
          <img
            src="https://www.clipartmax.com/png/middle/59-596472_free-buildings-icons-building-flat-icon-png.png"
            alt=""
          />{" "}
        </div>
        <div className="text-center mt-4 name"> SOFTA APARTMENTS </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            {" "}
            <BsPersonFill/>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
            />{" "}
          </div>
          <div className="form-field d-flex align-items-center">
            {" "}
            <BsKeyFill/>{" "}
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />{" "}
          </div>{" "}
          <button className="btn mt-3">Login</button>
        </form>
       
      </div>
    </div>
    </>
  );
};
export default Login;
