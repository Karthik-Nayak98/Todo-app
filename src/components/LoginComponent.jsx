import React, { Component } from "react";
import "../styles/LoginStyles.css";

class Login extends Component {
  render() {
    return (
      <div className="box">
        <div className="box__header">
          <h1>Login</h1>
        </div>
        <form>
          <div className="inputbox">
            <input type="text" className="email" required />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <input type="password" className="password" required />
            <label>Password</label>
          </div>
          <button className="submit-button" type="submit" value="Login">
            Login
          </button>
        </form>
        <span>
          Don't have an Account?
          <button className="sign-up">Sign Up</button>
        </span>
      </div>
    );
  }
}

export default Login;
