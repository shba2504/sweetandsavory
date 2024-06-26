import "../MenuPreview/MenuPreview.css";
import Images from "../../images/images";
import { NavLink } from "react-router-dom";

const MenuPreview = () => {
  return (
    <>
      <section>
        <div className="preview">
          <h1>Just a Taste</h1>
          <div className="items">
            <img
              src={Images.avocadotoast}
              alt="plate of avocado toast with poached egg"
              className="items"
            />

            <img
              src={Images.eggbenedict}
              alt="plate of eggs benedict"
              className="items"
            />
            <img
              src={Images.blueberryfrenchtoast}
              alt="plate of French toast with blueberries"
              className="items"
            />
            <img
              src={Images.spread4}
              alt="breakfast spread"
              className="items"
            />
            <img
              src={Images.acaibowl}
              alt="acai bowl with fruit platter"
              className="items"
            />
            <img
              src={Images.spread2}
              alt="table with breakfast foods"
              className="items"
            />
            <img
              src={Images.fruitpancake}
              alt="plate of pancakes with strawberries and blueberries"
              className="items"
            />
          </div>
          <div class="full-menu">
            <NavLink to="/menu">
              <h2>See Our Full Menu</h2>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPreview;
