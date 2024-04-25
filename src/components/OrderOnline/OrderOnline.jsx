import Footer from "../Footer/Footer";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../OrderOnline/OrderOnline.css";
import Images from "../../images/images";
import Nav from "../Nav/Nav";

const OrderOnline = () => {
  return (
    <>
      <Nav />
      <div className="cart">
        <MdOutlineShoppingCart
          style={{
            position: "absolute",
            top: 35,
            right: 80,
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
        <div className="menu-order">
          <div className="menu">
            <ul className="menu-items">
              <li>
                <img src={Images.blueberryfrenchtoast} />
                <div>
                  <h3>Blueberry Banana French Toast</h3>
                  <p>Served on Brioche bread w/ bananas and blueberries.</p>
                  <span>$14</span>
                </div>
              </li>
              <li>
                <img src={Images.sweettoast} />
                <div>
                  <h3>Sweet Toast</h3>
                  <p>
                    Served with kiwi, strawberries, & blueberries, dripping in
                    our caramel mascarpone sauce.
                  </p>
                  <span>$15</span>
                </div>
              </li>
              <li>
                <img src={Images.acaibowl} />
                <div>
                  <h3>Acaí Bowl</h3>
                  <p>
                    Build your own acaí bowl with local, fresh fruit and
                    granola.
                  </p>
                  <span>$12</span>
                </div>
              </li>
              <li>
                <img src={Images.chickenwaffles} />
                <div>
                  <h3>Chicken and Waffles</h3>
                  <p>
                    Two fresh Belgian waffles with two pieces of fried chicken
                    with butter and our special syrup.
                  </p>
                  <span>$16</span>
                </div>
              </li>
              <li>
                <img src={Images.avocadotoast} />
                <div>
                  <h3>Egg and Avocado Toast</h3>
                  <p>
                    Freshly baked bread with avocado spread and an over-easy egg
                    to top it all off.
                  </p>
                  <span>$8</span>
                </div>
              </li>
              <li>
                <img src={Images.shakshouka} />
                <div>
                  <h3>Shakshouka</h3>
                  <p>
                    A North African/Middle Eastern classic with fresh tomatoes,
                    spices, and poached eggs.
                  </p>
                  <span>$12</span>
                </div>
              </li>
              <li>
                <img src={Images.bananapancakes} />
                <div>
                  <h3>Buttermilk Pancakes</h3>
                  <p>
                    Includes three pancakes with three toppings of your choice,
                    served with butter and syrup.
                  </p>
                  <span>$10</span>
                </div>
              </li>
              <li>
                <img src={Images.eggbenedict} />
                <div>
                  <h3>Eggs Benedict</h3>
                  <p>
                    Ham and two poached eggs over a freshly-baked English muffin
                    with Hollandaise sauce.
                  </p>
                  <span>$13</span>
                </div>
              </li>
              <li>
                <img src={Images.crepes} />
                <div>
                  <h3>Crêpes</h3>
                  <p>
                    Build your crêpes with these choices: seasonal fruit,
                    Nutella, nuts, powdered sugar, whipped cream, and syrup.
                  </p>
                  <span>$10</span>
                </div>
              </li>
              <li>
                <img src={Images.steakandeggs} />
                <div>
                  <h3>Steak and Eggs</h3>
                  <p>
                    Grilled hanger steak with poached eggs and fresh tomatoes.
                  </p>
                  <span>$18</span>
                </div>
              </li>
              <li>
                <img src={Images.belgianwaffle} />
                <div>
                  <h3>Belgian Waffles</h3>
                  <p>
                    Fresh Belgian waffles with butter, whipped cream, and
                    additional toppings of your choice.
                  </p>
                  <span>$9</span>
                </div>
              </li>
              <li>
                <img src={Images.veggieomelet} />
                <div>
                  <h3>Veggie Omelet</h3>
                  <p>
                    Three scrambled eggs, spinach, red peppers, onions, avocado,
                    potatoes with cheese.
                  </p>
                  <span>$12</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderOnline;
