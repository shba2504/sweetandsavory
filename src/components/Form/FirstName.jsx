import React, { useState } from "react";

export const FirstName = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <label htmlFor="firstName"></label>
      <input
        id={firstName}
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        style={{ border: "none", backgroundColor: "hsla(180, 7%, 92%, 0.5)" }}
        required
      />
    </>
  );
};
