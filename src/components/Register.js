import "./style.css";
import { Link, Redirect } from "react-router-dom";

import React from "react";
import firebase from "firebase";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      time:0,
      isRegister: false,
    };
  }

  writeUserData(userId, name, surname, email, password) {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        id:userId,
        userName: name,
        userSurname: surname,
        email: email,
        password: password,
        time:0
      });
  }

  create_UUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  createUserAccount = () => {
    const { email, password, firstName, lastName } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const userId = this.create_UUID();
        this.writeUserData(userId, firstName, lastName, email, password);
        this.setState({ isRegister: true });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { isRegister } = this.state;
    const isInvalid =
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.password === "";

    return (
      <div>
        {isRegister ? (
          <Redirect to="/" />
        ) : (
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
        )}
      </div>
    );
  }
}

export default Register;
