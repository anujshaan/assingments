import React from "react";

const LoginForm = () => {
  return (
    <div className="form">
      <h2>Create Account</h2>
      <form>
        <div className="form__input">
          <input type="email" name="email" />
          <label>Email</label>
        </div>
        <div className="form__input">
          <input type="password" name="password" />
          <label>Password</label>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default LoginForm;
