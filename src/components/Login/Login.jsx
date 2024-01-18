import React from "react";
import Nav from "../Nav/Nav";
import "../Login/Login.css";

const Login = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div className="preview">
            <h1>Welcome Back!</h1>
          </div>
        </section>
        <section>
          <div className="full-screen-container">
            <div className="login-container">
              <form>
                <div className="input-group">
                  <p>
                    Log in below or <a href="/">create an account</a>
                  </p>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" />

                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" />

                  <div>
                    <button id="login-button" type="submit" aria-label="login-submit">
                      Sign In
                    </button>
                    <p>Forgot Password?</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <br />
      </article>
    </>
  );
};

export default Login;
