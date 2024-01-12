import "../Nav/Nav.css";
import Images from "../../images/images";

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
