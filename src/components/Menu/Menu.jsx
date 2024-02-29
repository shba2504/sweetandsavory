import "../Menu/Menu.css";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { MenuMap } from "./MenuMap";
import Nav from "../Nav/Nav";

const menuItems = [
  {
    name: "Blueberry Banana French Toast",
    description: "Served on Brioche bread w/ bananas and blueberries.",
  },
  {
    name: "Sweet Toast",
    description:
      "Served with kiwi, strawberries, & blueberries, dripping in our caramel mascarpone sauce.",
  },
  {
    name: "Acaí Bowl",
    description:
      "Build your own acaí bowl with local, fresh fruit and granola.",
  },
  {
    name: "Chicken and Waffles",
    description:
      "Two fresh Belgian waffles with two pieces of fried chicken with butter and our special syrup.",
  },
  {
    name: "Egg and Avocado Toast",
    description:
      "Freshly baked bread with avocado spread and an over-easy egg to top it all off.",
  },
  {
    name: "Shakshouka",
    description:
      "A North African/Middle Eastern classic with fresh tomatoes, spices, and poached eggs.",
  },
  {
    name: "Buttermilk Pancakes",
    description:
      "Includes three pancakes with three toppings of your choice, served with butter and syrup.",
  },
  {
    name: "Eggs Benedict",
    description:
      "Ham and two poached eggs over a freshly-baked English muffin with Hollandaise sauce.",
  },
  {
    name: "Crêpes",
    description:
      "Build your crêpes with these choices: seasonal fruit, Nutella, nuts, powdered sugar, whipped cream, and syrup.",
  },
  {
    name: "Steak and Eggs",
    description: "Grilled hanger steak with poached eggs and fresh tomatoes.",
  },
  {
    name: "Belgian Waffles",
    description:
      "Fresh Belgian waffles with butter, whipped cream, and additional toppings of your choice.",
  },
  {
    name: "Veggie Omelet",
    description:
      "Three scrambled eggs, spinach, red peppers, onions, avocado, potatoes with cheese.",
  },
];

const Menu = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="preview">
          <h1>Our Menu</h1>
        </div>
        <div>
          <br />
          <h2 className="menu-header">Something New and Something Old</h2>
        </div>
        <div>
          <ul className="menu-list">
            {menuItems.map((menuItem) => (
              <MenuMap menuObj={menuItem} key={menuItem.name} />
            ))}
          </ul>
        </div>
        <br />
        <div
          className="submit-btn"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        ></div>
        <br />

        <Footer />
      </main>
    </>
  );
};

export default Menu;
