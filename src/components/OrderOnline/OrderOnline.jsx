import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../OrderOnline/OrderOnline.css";

const OrderOnline = () => {
  return (
    <>
      <Nav />
      <MdOutlineShoppingCart
        style={{ position: "absolute", fontSize: "27px" }}
      />
      <article>
        <section>
          <div className="preview">
            <h1>OrderOnline</h1>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default OrderOnline;
