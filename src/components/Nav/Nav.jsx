import "../Nav/Nav.css";
import Images from "../../images/images";
import { NavLinks } from "./NavLinks";
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

        <NavLinks />
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
