import "../Nav/Nav.css";
import Images from "../../images/images";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Images.Logo} alt="half-lemon and restaurant name logo" />
        </div>

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
        <div className="toggle-button">
          <RxHamburgerMenu
            color="#000"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />

          {toggleMenu && (
            <div className="overlay-close">
              <MdOutlineRestaurantMenu
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
