import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth, database } from "../config/firebase.utils";
import "../styles/LoginStyles.css";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  error: false,
  touched: {
    username: false,
    email: false,
    password: false,
  },
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      this.database = database
        .ref(`users/${resp.user.uid}`)
        .set({ username: this.state.username });
      this.setState({ ...INITIAL_STATE });
      this.props.history.push("/login");
    } catch (err) {
      this.setState({
        error: true,
        username: "",
        email: "",
        password: "",
        touched: { username: false, email: false, password: false },
      });
    }
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate = (username, email, password) => {
    const errors = {
      username: "",
      email: "",
      password: "",
    };

    if (this.state.touched.username && username.length < 3)
      errors.username = "Username should be >= 3 characters";
    else if (this.state.touched.username && username.length > 15)
      errors.username = "Username should be <=15 characters";

    const emailReg = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (this.state.touched.email && !emailReg.test(email))
      errors.email = "Entered email is invalid";

    const passwordReg = /^(?=.*[a-z])(?=.*[!-_.+@#$%^&*]).{5,}$/;
    if (this.state.touched.password && !passwordReg.test(password))
      errors.password =
        "Password should have special character & length should be >= 5";

    return errors;
  };

  render() {
    const errors = this.validate(
      this.state.username,
      this.state.email,
      this.state.password
    );

    return (
      <div className="box">
        <div className="box__header">
          <h1>SignUp</h1>
          <span className="validation-error">
            {this.state.error ? "User already exists" : ""}
          </span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input
              type="text"
              className="username"
              name="username"
              onBlur={this.handleBlur("username")}
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            <label>User Name</label>
            <span className="errors">{errors.username}</span>
          </div>

          <div className="inputbox">
            <input
              type="text"
              className="email"
              name="email"
              onBlur={this.handleBlur("email")}
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <span className="errors">{errors.email}</span>
          </div>

          <div className="inputbox">
            <input
              type="password"
              className="password"
              name="password"
              onBlur={this.handleBlur("password")}
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <span className="errors">{errors.password}</span>
          </div>
          <button className="submit-button" type="submit" value="SignUp">
            SignUp
          </button>
        </form>
        <span className="page-change">
          Already have an Account?&nbsp;&nbsp;
          <Link to="/login">Login</Link>
        </span>
      </div>
    );
  }
}

export default SignUp;
