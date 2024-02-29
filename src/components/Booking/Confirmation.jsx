import React from "react";
import Footer from "../Footer/Footer";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Nav from "../Nav/Nav";

const Confirmation = () => {
  return (
    <>
      <Nav />
      <div>
        <div
          style={{
            paddingTop: "4em",
          }}
        >
          <IoIosCheckmarkCircle
            style={{
              fontSize: 80,
              color: "#f4ce14",
              margin: "0.5em auto",
              display: "block",
            }}
          />
          <h1
            style={{
              marginTop: "0",
              paddingBottom: "3.5em",
              textAlign: "center",
              fontWeight: "lighter",
            }}
          >
            Your reservation has been confirmed!
            <hr style={{ width: "40%" }} />
          </h1>
        </div>
        <p
          style={{
            padding: "1em 2em 1em 1em",
            fontSize: 20,
            textAlign: "center",
            display: "block",
          }}
        >
          <strong>*</strong> If you need to cancel your reservation, please do
          so at least 24 hours in advance.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
