import "../Nav/Nav.css";
import Images from "../../images/images";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/create">Create Account</Link>
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
