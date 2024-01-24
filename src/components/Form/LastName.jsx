import React, { useState } from "react";

export const LastName = () => {
  const [lastName, setLastName] = useState("");

  return (
    <>
      <label htmlFor="lastName"></label>
      <input
        id={lastName}
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        style={{ border: "none", backgroundColor: "hsla(180, 7%, 92%, 0.5)" }}
        required
      />
    </>
  );
};
