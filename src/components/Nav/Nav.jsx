import "../Nav/Nav.css";
import Images from "../../images/images";
import { Link } from "react-router-dom";

/*const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});*/

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Images.Logo} alt="half-lemon and restaurant name logo" />
        </div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
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
      </nav>
    </>
  );
};

export default Nav;
