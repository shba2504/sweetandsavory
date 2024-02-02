import React from "react";
import { NavLink } from "react-router-dom";
import "../Nav/Nav.css";

export const NavLinks = () => {
  return (
    <>
      <div className="navbar-links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create Account</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
