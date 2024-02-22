import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../OrderOnline/OrderOnline.css";
import { MenuItems } from "../Menu/MenuItems";

const OrderOnline = (props) => {
  return (
    <>
      <Nav />
      <MdOutlineShoppingCart
        style={{ position: "absolute", margin: "0", fontSize: "27px" }}
      />
      <article>
        <section>
          <div className="preview">
            <h1>Order Online</h1>
          </div>
          <MenuItems />
        </section>
      </article>
      <Footer />
    </>
  );
};

export default OrderOnline;
