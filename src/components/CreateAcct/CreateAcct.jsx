import React from "react";
import "../CreateAcct/CreateAcct.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import { FirstName } from "../Form/FirstName";
import { LastName } from "../Form/LastName";
import { EmailAddress } from "../Form/EmailAddress";
import { Password } from "../Form/Password";

const CreateAcct = () => {
  return (
    <>
      <Nav />
      <div className="preview">
        <h1>Create an Account</h1>
        <p>
          Earn rewards when you create an account or{" "}
          <Link to="/login"> Log In</Link>
        </p>
      </div>

      <div className="input-container">
        <div className="form-container">
          <form className="input-group">
            <FirstName />
            <LastName />
            <EmailAddress />
            <Password />
            <br />
            <div>
              <button type="submit">Sign In</button>
              <input
                type="checkbox"
                name="acceptedNewsletter"
                aria-label="click checkbox to join our newsletter"
              />
              <p>Join our monthly newsletter to view our upcoming specials!</p>
            </div>
          </form>
        </div>
      </div>

      <br />
    </>
  );
};

export default CreateAcct;
