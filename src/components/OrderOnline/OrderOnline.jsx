import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../OrderOnline/OrderOnline.css";
import { MenuItems } from "../Menu/MenuItems";

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
      <article>
        <section>
          <div className="preview">
            <h1>Order Online</h1>
          </div>
        </section>
        <section>
          <div>{<MenuItems />}</div>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default OrderOnline;
