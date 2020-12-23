import "./style.css";

import { Link } from 'react-router-dom';
import register from './Register'

function Login() {
  return (
    <div className="login">
      <p className="loginText">Login</p>
      <input type="email" className="inputEmail" placeholder="Enter your email"/>
      <input type="password" className="inputPassword" placeholder="Enter your password" />
      <input type="submit" className="inputSubmit" value="Login" />
      <p className="loginText"> Don’t have an account yet? <Link to="/register">Register</Link> </p>
    </div>
  );
}

export default Login;
