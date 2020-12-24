import "./style.css";
import { Link } from "react-router-dom";

import React from "react";
import firebase from "firebase";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  // componentDidMount(){}

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  createUserAccount = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  render() {
    const isInvalid =
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.password === "";

    return (
      <div className="register">
        <p className="registerText">Register</p>
        <input
          type="text"
          id="firstName"
          className="inputFirstName"
          placeholder="Enter your first name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="lastName"
          className="inputLastName"
          placeholder="Enter your last name"
          onChange={this.handleChange}
        />
        <input
          type="email"
          id="email"
          className="inputEmail"
          placeholder="Enter your email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          id="password"
          className="inputPassword"
          placeholder="Enter your password"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          className="inputSubmit"
          disabled={isInvalid}
          value="Register"
          onClick={this.createUserAccount}
        />
        <p className="registerText">
          Already registered? <Link to="/">Log in</Link>
        </p>
      </div>
    );
  }
}

export default Register;
