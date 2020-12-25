import "./style.css";

import { Link, Redirect } from "react-router-dom";

import firebase from "firebase";

import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasAccount: false,
    };
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  logIn = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ hasAccount: true });

        var usersRef = firebase.database().ref("users/");

        usersRef.on("child_added", (data) => {
          var newPlayer = data.val();
          if (newPlayer.email === email) {
            localStorage.setItem("user", JSON.stringify(newPlayer));
          }
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const isInvalid = this.state.email === "" || this.state.password === "";
    const { hasAccount } = this.state;

    return (
      <div>
        {hasAccount ? (
          <Redirect to="/timer" />
        ) : (
          <div className="login">
            <p className="loginText">Login</p>
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
              value="Login"
              onClick={this.logIn}
            />
            <p className="loginText">
              Don’t have an account yet? <Link to="/register">Register</Link>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
