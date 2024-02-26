import React from "react";

export const MenuMap = (props) => {
  return (
    <>
      <div>
        <h3>{props.menuObj.name}</h3>
        <p>{props.menuObj.description}</p>
      </div>
    </>
  );
};
