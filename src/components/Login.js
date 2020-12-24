import "./style.css";

import { Link } from 'react-router-dom';

import firebase from 'firebase';

import React from 'react'

class Login extends React.Component{
  
  render(){
    console.log(this.state)
    return (
    <div className="login">
      <p className="loginText">Login</p>
      <input type="email" id="email" className="inputEmail" placeholder="Enter your email"/>
      <input type="password" id="password" className="inputPassword" placeholder="Enter your password" />
      <input type="submit" className="inputSubmit" value="Login"  />
      <p className="loginText"> Don’t have an account yet? <Link to="/register">Register</Link> </p>
    </div>
  );
  }
}

export default Login;
