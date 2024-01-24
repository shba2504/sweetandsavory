import React, { useState } from "react";

export const Password = () => {
  return (
    <>
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        style={{ border: "none" }}
        required
      />
    </>
  );
};
