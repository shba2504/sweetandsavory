import React, { useState } from "react";

export const EmailAddress = () => {
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <>
      <label htmlFor="emailAddress"></label>
      <input
        id={emailAddress}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmailAddress(e.target.value)}
        style={{ border: "none", backgroundColor: "hsla(180, 7%, 92%, 0.5)" }}
        required
      />
    </>
  );
};
