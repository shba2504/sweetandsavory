import React from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { EmailAddress } from "../Form/EmailAddress";
import { Password } from "../Form/Password";

const Login = () => {
  return (
    <>
      <div>
        <div className="preview">
          <h1>Welcome Back!</h1>
        </div>
      </div>
      <div>
        <div className="full-screen-container">
          <div className="login-container">
            <form>
              <div className="input-group">
                <p style={{ fontSize: 24 }}>
                  Log in below with email and password or{" "}
                  <Link to="/create">create an account</Link>
                </p>
                <EmailAddress />
                <Password />

                <div>
                  <button
                    id="login-button"
                    type="submit"
                    aria-label="login-submit"
                  >
                    Sign In
                  </button>
                  <p>Forgot Password?</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Login;
