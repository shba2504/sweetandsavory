import Nav from "../Nav/Nav";
import Recipes from "../Recipes";
import Images from "../../images/images";
import "../Menu/Menu.css";
import Footer from "../Footer/Footer";

const recipes = [
  {
    name: "Blueberry Banana French Toast",
    description: "Served on Brioche bread w/ a side of goat cheese.",
    photo: "../../images/images/blueberryfrenchtoast",
    price: "$14",
    photoName: "src/images/blueberryfrenchtoast.jpg",
  },
  {
    name: "Sweet Toast",
    description:
      "Served with kiwi, strawberries, & blueberries, dripping in our caramel mascarpone sauce.",
    price: "$15",
    photoName: "src/images/sweettoast.jpg",
  },
  {
    name: "Acaí Bowl",
    description:
      "Build your own acaí bowl with local, fresh fruit and granola.",
    price: "$12",
    photoName: "src/images/acaibowl.jpg",
  },
  {
    name: "Chicken and Waffles",
    description:
      "Two fresh Belgian waffles with two pieces of fried chicken with butter and our special syrup.",
    price: "$16",
    photoName: "src/images/chickenwaffles.jpg",
  },
  {
    name: "Egg and Avocado Toast",
    description:
      "Freshly baked bread with avocado spread and an over-easy egg to top it all off.",
    price: "$8",
    photoName: "src/images/avocadotoast.jpg",
  },
  {
    name: "Shakshouka",
    description:
      "A North African and Middle Eastern classic with fresh tomatoes, spices, and poached eggs.",
    price: "$12",
    photoName: "src/images/shakshouka.jpg",
  },
  {
    name: "Buttermilk Pancakes",
    description:
      "Includes three pancakes with three toppings of your choice, served with butter and syrup.",
    price: "$10",
    photoName: "src/images/bananapancakes.jpg",
  },
  {
    name: "Eggs Benedict",
    description:
      "Ham and two poached eggs over a freshly-baked English muffin with Hollandaise sauce.",
    price: "$13",
    photoName: "src/images/eggbenedict.jpg",
  },
  {
    name: "Crêpes",
    description:
      "Build your own crêpes with any topping of your choice: seasonal fruit, Nutella, nuts, powdered sugar, whipped cream, and syrup.",
    price: "$10",
    photoName: "src/images/crepes.jpg",
  },
  {
    name: "Steak and Eggs",
    description:
      "Grilled hanger steak with sunny side-up eggs and fresh tomatoes.",
    price: "$18",
    photoName: "src/images/steakandeggs.png",
  },
  {
    name: "Belgian Waffle",
    description:
      "A fresh Belgian waffle with butter, whipped cream, and syrup.",
    price: "$9",
    photoName: "src/images/belgianwaffle.jpg",
  },
  {
    name: "Veggie Omelet",
    description:
      "Scrambled eggs, spinach, red peppers, onions, avocado, potatoes with cheese of your choice.",
    price: "$12",
    photoName: "src/images/veggieomelet.jpg",
  },
];

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
          <h2
            style={{
              display: "inline - block",
              padding: "1rem 0",
              borderTop: "1px solid",
              borderBottom: "1px solid",
              fontWeight: "500",
              letterSpacing: "7px",
              textAlign: "center",
            }}
          >
            Something New and Something Old
          </h2>
        </div>
        <div className="menu">
          <ul className="menu-items">
            {recipes.map((recipe) => (
              <Recipes recipeObj={recipe} key={recipe.name} />
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
        >
          <button
            type="submit"
            aria-label="submit button"
            style={{
              width: "300px",
            }}
          >
            Order Delivery
          </button>
        </div>
        <br />

        <Footer />
      </main>
    </>
  );
};

export default Menu;
