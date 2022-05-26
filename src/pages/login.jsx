import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div className="register">
      <div className="register__left">
        <Link to={"/register"}>
          <button className="login__register--button">Create Account</button>
        </Link>
        <LoginForm />
      </div>
      <div className="register__right">
        <img src="images/login.png" alt="" className="register__image" />
      </div>
    </div>
  );
};

export default Login;
