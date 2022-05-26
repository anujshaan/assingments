import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="register__left">
        <Link to={"/login"}>
          <button className="register__login--button">Login</button>
        </Link>
        <RegisterForm />
      </div>
      <div className="register__right">
        <img src="images/login.png" alt="" className="register__image" />
      </div>
    </div>
  );
};

export default Register;
