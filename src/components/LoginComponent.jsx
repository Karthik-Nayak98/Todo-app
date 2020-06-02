import React, { Component } from "react";
import SignUp from "./SignUpComponent";
import { Route } from "react-router-dom";
import "../styles/LoginStyles.css";

class Login extends Component {
  handleSubmit = () => {
    this.props.history.push("/signup");
  };

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
        <span className="">
          Don't have an Account?&nbsp;&nbsp;
          <button onClick={this.handleSubmit} className="sign-up">
            Sign Up
          </button>
          <Route exact path="/signup" component={SignUp} />
        </span>
      </div>
    );
  }
}

export default Login;
