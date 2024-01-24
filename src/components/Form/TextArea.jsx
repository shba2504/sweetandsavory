import React from "react";

export const TextArea = () => {
  return (
    <>
      <textarea
        type="text"
        id="textarea"
        placeholder="Special Requests or Accommodations (optional)"
        style={{ border: "none", backgroundColor: "hsla(180, 7%, 92%, 0.5)" }}
      />
    </>
  );
};
