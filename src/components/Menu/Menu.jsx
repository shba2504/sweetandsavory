import Nav from "../Nav/Nav";
import Recipes from "../Recipes";
import Images from "../../images/images";
import { MdOutlineShoppingCart } from "react-icons/md";
import Footer from "../Footer/Footer";

const recipes = [
  {
    name: "Blueberry Banana French Toast",
    description: "Served on Brioche bread w/ a side of goat cheese.",
    photo: "../../images/images/blueberryfrenchtoast",
    price: "$14",
    photo: {},
  },
  {
    name: "Sweet Toast",
    description:
      "Served with kiwi, strawberries, & blueberries, dripping in our caramel mascarpone sauce.",
    price: "$15",
  },
  {
    name: "Acaí Bowl",
    description:
      "Build your own acaí bowl with local, fresh fruit and granola.",
    price: "$12",
  },
  {
    name: "Chicken and Waffles",
    description:
      "Two fresh Belgian waffles with two pieces of fried chicken with butter and our special syrup.",
    price: "$16",
  },
  {
    name: "Egg and Avocado Toast",
    description:
      "Freshly baked bread with avocado spread and an over-easy egg to top it all off.",
    price: "$8",
  },
  {
    name: "Shakshouka",
    description:
      "a North African and Middle Eastern classic with fresh tomatoes, spices, and poached eggs.",
    price: "$12",
  },
  {
    name: "Buttermilk Pancakes",
    description:
      "Includes three pancakes with three toppings of your choice, served with butter and syrup.",
    price: "$10",
  },
  {
    name: "Eggs Benedict",
    description:
      "Ham and two poached eggs over a freshly-baked English muffin with Hollandaise sauce.",
    price: "$13",
  },
  {
    name: "Crêpes",
    description:
      "Build your own crêpes with any topping of your choice: seasonal fruit, Nutella, nuts, powdered sugar, whipped cream, and syrup. Add them all at no additional cost!",
    price: "$10",
  },
  {
    name: "Steak and Eggs",
    description:
      "Grilled hanger steak with sunny side-up eggs and fresh tomatoes.",
    price: "$18",
  },
  {
    name: "Belgian Waffle",
    description:
      "A fresh Belgian waffle with butter, whipped cream, and syrup. Add two eggs for $2.00",
    price: "$9",
  },
  {
    name: "Veggie Omelet",
    description:
      "Scrambled eggs, spinach, red peppers, onions, avocado, potatoes with cheese of your choice. Add green chili for $2.99. Add pico de gallo for $1.99",
    price: "$12",
  },
];

const Menu = () => {
  return (
    <>
      <Nav />
      <MdOutlineShoppingCart />
      <article>
        <section>
          <div className="preview">
            <h1>Menu</h1>
          </div>
          <div className="slider">
            <h2>This Week's Specials - Image Slider</h2>
          </div>
        </section>
        <section>
          <div className="specials">
            <Recipes
              name="Blueberry Banana French Toast"
              description="Served on Brioche bread w/ a side of goat cheese."
              price="$14"
            />
            <Recipes
              name="Sweet Toast"
              description="Served with kiwi, strawberries, & blueberries, dripping in our caramel mascarpone sauce."
              price="$15"
            />
            <Recipes
              name="Acaí Bowl"
              description="Build your own acaí bowl with local, fresh fruit and granola."
              price="$12"
            />
            <Recipes
              name="Chicken and Waffles"
              description="Two fresh Belgian waffles with two pieces of fried chicken with butter and our special syrup."
              price="$16"
            />
            <Recipes
              name="Egg and Avocado Toast"
              description="Freshly baked bread with avocado spread and an over-easy egg to top it all off."
              price="$8"
            />
            <Recipes
              name="Shakshouka"
              description="A North African and Middle Eastern classic with fresh tomatoes, spices, and poached eggs."
              price="$12"
            />
            <Recipes
              name="Buttermilk Pancakes"
              description="Includes three pancakes with three toppings of your choice, served with butter and syrup."
              price="$10"
            />
            <Recipes
              name="Eggs Benedict"
              description="Ham and two poached eggs over a freshly-baked English muffin with Hollandaise sauce."
              price="$13"
            />
            <Recipes
              name="Crêpes"
              description="Build your own crêpes with any topping of your choice: seasonal fruit, Nutella, nuts, powdered sugar, whipped cream, and syrup. Add them all at no additional cost!"
              price="$10"
            />
            <Recipes
              name="Steak and Eggs"
              description="Grilled hanger steak with sunny side-up eggs and fresh tomatoes."
              price="$18"
            />
            <Recipes
              name="Belgian Waffle"
              description="A fresh Belgian waffle with butter, whipped cream, and syrup. Add two eggs for $2.00."
              price="$9"
            />
            <Recipes
              name="Veggie Omelet"
              description="Scrambled eggs, spinach, red peppers, onions, avocado, potatoes with cheese of your choice. Add green chili for $2.99. Add pico de gallo for $1.99."
              price="$12"
            />
          </div>
        </section>
        <br />
        <button>Order Delivery</button>
        <br />
      </article>
      <Footer />
    </>
  );
};

export default Menu;
