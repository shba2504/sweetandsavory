import Nav from "../Nav/Nav";
import "../Menu/Menu.css";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Menu = () => {
  return (
    <>
      <main>
        <Nav />
        <div className="preview">
          <h1>Our Menu</h1>
        </div>
        <div>
          <br />
          <h2 className="menu-header">Something New and Something Old</h2>
        </div>
        <MenuItems />
        <br />
        <div
          className="submit-btn"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <NavLink to="/order">
            <button
              type="submit"
              aria-label="submit button"
              style={{
                width: "300px",
              }}
            >
              Order Delivery
            </button>
          </NavLink>
        </div>
        <br />

        <Footer />
      </main>
    </>
  );
};

export default Menu;
