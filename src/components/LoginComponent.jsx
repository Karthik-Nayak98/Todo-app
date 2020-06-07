import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase.utils";
import "../styles/LoginStyles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.props.history.push("/todo");
      })
      .catch((err) => {
        this.setState({ message: err.message });
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="box">
        <div className="box__header">
          <h1>Login</h1>
        </div>
        <span>{this.state.message}</span>
        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input
              type="text"
              className="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <input
              type="password"
              className="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
          </div>
          <button className="submit-button" type="submit" value="Login">
            Login
          </button>
        </form>
        <span className="">
          Don't have an Account?&nbsp;&nbsp;
          <Link to="/signup">SignUp</Link>
        </span>
      </div>
    );
  }
}

export default Login;
