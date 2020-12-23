import "./style.css";
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className="register">
      <p className="registerText">Register</p>
      <input type="text" className="inputFirstName" placeholder="Enter your first name" />
      <input type="text" className="inputLastName" placeholder="Enter your last name" />
      <input type="email" className="inputEmail" placeholder="Enter your email"/>
      <input type="password" className="inputPassword" placeholder="Enter your password" />
      <input type="submit" className="inputSubmit" value="Register" />
      <p className="registerText"> Already registered? <Link to="/">Log in</Link> </p>
    </div>
  );
}

export default Register;
