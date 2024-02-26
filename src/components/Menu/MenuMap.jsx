import React from "react";

export const MenuMap = (props) => {
  return (
    <>
      <h3>{props.menuObj.name}</h3>
      <p>{props.menuObj.description}</p>
    </>
  );
};
