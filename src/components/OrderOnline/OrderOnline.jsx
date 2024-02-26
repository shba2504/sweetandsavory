import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../OrderOnline/OrderOnline.css";
import Recipes from "../Recipes";

const recipes = [
  {
    name: "Blueberry Banana French Toast",
    description: "Served on Brioche bread w/ a side of goat cheese.",
    price: "$14",
    photoName: "assets/blueberryfrenchtoast.jpg",
    button: "Add to Cart",
  },
  {
    name: "Sweet Toast",
    description:
      "Served with kiwi, strawberries, & blueberries, dripping in our caramel mascarpone sauce.",
    price: "$15",
    photoName: "src/images/sweettoast.jpg",
    button: "Add to Cart",
  },
  {
    name: "Acaí Bowl",
    description:
      "Build your own acaí bowl with local, fresh fruit and granola.",
    price: "$12",
    photoName: "src/images/acaibowl.jpg",
    button: "Add to Cart",
  },
  {
    name: "Chicken and Waffles",
    description:
      "Two fresh Belgian waffles with two pieces of fried chicken with butter and our special syrup.",
    price: "$16",
    photoName: "src/images/chickenwaffles.jpg",
    button: "Add to Cart",
  },
  {
    name: "Egg and Avocado Toast",
    description:
      "Freshly baked bread with avocado spread and an over-easy egg to top it all off.",
    price: "$8",
    photoName: "src/images/avocadotoast.jpg",
    button: "Add to Cart",
  },
  {
    name: "Shakshouka",
    description:
      "A North African/Middle Eastern classic with fresh tomatoes, spices, and poached eggs.",
    price: "$12",
    photoName: "src/images/shakshouka.jpg",
    button: "Add to Cart",
  },
  {
    name: "Buttermilk Pancakes",
    description:
      "Includes three pancakes with three toppings of your choice, served with butter and syrup.",
    price: "$10",
    photoName: "src/images/bananapancakes.jpg",
    button: "Add to Cart",
  },
  {
    name: "Eggs Benedict",
    description:
      "Ham and two poached eggs over a freshly-baked English muffin with Hollandaise sauce.",
    price: "$13",
    photoName: "src/images/eggbenedict.jpg",
    button: "Add to Cart",
  },
  {
    name: "Crêpes",
    description:
      "Build your crêpes with these choices: seasonal fruit, Nutella, nuts, powdered sugar, whipped cream, and syrup.",
    price: "$10",
    photoName: "src/images/crepes.jpg",
    button: "Add to Cart",
  },
  {
    name: "Steak and Eggs",
    description: "Grilled hanger steak with poached eggs and fresh tomatoes.",
    price: "$18",
    photoName: "src/images/steakandeggs.png",
    button: "Add to Cart",
  },
  {
    name: "Belgian Waffle",
    description:
      "A fresh Belgian waffle with butter, whipped cream, and syrup.",
    price: "$9",
    photoName: "src/images/belgianwaffle.jpg",
    button: "Add to Cart",
  },
  {
    name: "Veggie Omelet",
    description:
      "Three scrambled eggs, spinach, red peppers, onions, avocado, potatoes with cheese.",
    price: "$12",
    photoName: "src/images/veggieomelet.jpg",
    button: "Add to Cart",
  },
];

const OrderOnline = () => {
  return (
    <>
      <Nav />
      <div className="cart">
        <MdOutlineShoppingCart
          style={{
            position: "absolute",
            top: 35,
            right: 60,
            margin: "0",
            fontSize: "27px",
          }}
        />
      </div>
      <section>
        <div className="preview">
          <h1>Order Online</h1>
        </div>
      </section>
      <section>
        <div>
          <div className="menu">
            <ul className="menu-items">
              {recipes.map((recipe) => (
                <Recipes recipeObj={recipe} key={recipe.name} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderOnline;
