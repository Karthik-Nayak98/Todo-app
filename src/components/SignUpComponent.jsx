import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase.utils";
import "../styles/LoginStyles.css";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  message: "",
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.setState({ ...INITIAL_STATE });
        // database().ref(`user/${user.uid}`).child("task");
        // database().ref(`users/${user.uid}`).child("taskcount");
        this.props.history.push("/todo");
      })
      .catch((err) => {
        this.setState({ message: err.message });
        console.log(err);
      });
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="box">
        <div className="box__header">
          <h1>SignUp</h1>
        </div>
        <span>{this.state.message.length ? this.state.message : null}</span>
        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input
              type="text"
              className="username"
              name="username"
              required
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>User Name</label>
          </div>
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
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label>Password</label>
          </div>
          {/* <div className="inputbox">
            <input type="password" className="password" required />
            <label>Confirm Password</label>
          </div> */}
          <button className="submit-button" type="submit" value="SignUp">
            SignUp
          </button>
        </form>
        <span className="">
          Already have an Account?&nbsp;&nbsp;
          <Link to="/login">Login</Link>
        </span>
      </div>
    );
  }
}

export default SignUp;
