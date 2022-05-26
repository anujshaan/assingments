import React from "react";

const RegisterForm = () => {
  return (
    <div className="form">
      <h2>Create Account</h2>
      <form>
        <div className="form__input">
          <input type="text" name="name" value="" />
          <label>Name</label>
        </div>
        <div className="form__input">
          <input type="email" name="email" />
          <label>Email</label>
        </div>
        <div className="form__input">
          <input type="password" name="password" />
          <label>Password</label>
        </div>
        <div className="form__input">
          <input type="password" name="cf_password" />
          <label>Confirm Password</label>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
