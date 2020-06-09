import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase.utils";
import "../styles/LoginStyles.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: false,
  touched: {
    email: false,
    password: false,
  },
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      this.props.history.push("/todo");
    } catch (err) {
      this.setState({ ...INITIAL_STATE, error: true });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleBlur = (field) => (event) => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };

  validate = (email, password) => {
    const errors = {
      email: "",
      password: "",
    };

    const emailReg = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (this.state.touched.email && !emailReg.test(email))
      errors.email = "Email is invalid";

    const passwordReg = /^(?=.*[a-z])(?=.*[!-_.+@#$%^&*]).{5,}$/;
    if (this.state.touched.password && !passwordReg.test(password))
      errors.password =
        "Password should have special character & length should be >= 5";

    // errors.email.length && errors.password.length
    //   ? this.setState({ isEnabled: !this.state.isEnabled })
    //   : "";

    return errors;
  };

  render() {
    const errors = this.validate(this.state.email, this.state.password);

    return (
      <div className="box">
        <header className="box__header">
          <h1>Login</h1>
          <span className="validation-error">
            {this.state.error ? "Invalid username or password" : ""}
          </span>
        </header>

        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input
              type="text"
              className={errors.email.length ? "email" : "error email"}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur("email")}
              required
            />
            <label>Email</label>
            <span className="errors">{errors.email}</span>
          </div>
          <div className="inputbox">
            <input
              type="password"
              className={errors.password ? "error password" : "password"}
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur("password")}
              required
            />
            <label>Password</label>
            <span className="errors">{errors.password}</span>
          </div>
          <button className="submit-button" type="submit" value="Login">
            Login
          </button>
        </form>
        <span className="page-change">
          Don't have an Account?&nbsp;&nbsp;
          <Link to="/signup">SignUp</Link>
        </span>
      </div>
    );
  }
}

export default Login;
