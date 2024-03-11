import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-center">
        <div className="login-logo">
          <div className="login-logo-banner">
            <img
              className="logo-img"
              src="https://cdn.haitrieu.com/wp-content/uploads/2022/12/Icon-Truong-Dai-hoc-Greenwich-Viet-Nam.png"
              alt=""
            />
            <h1>Greenwich University</h1>
          </div>
          <p>
            University of Greenwich in London and Kent was established in 1890.
            We are located on the banks of the River Thames in South London.
          </p>
        </div>
        <div className="login-field">
          <form className="login-field-container">
            <div className="login-feild-text">
              <p>Login</p>
            </div>
            <div className="input-fields">
              <p>
                <i className="bi bi-person-circle"></i>
              </p>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="input-fields">
              <p>
                <i className="bi bi-shield-lock-fill"></i>
              </p>
              <input type="text" placeholder="Enter password" />
            </div>
            <p className="forgot-password-txt">Forgot Password?</p>
            <button className="sign-in-btn">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
