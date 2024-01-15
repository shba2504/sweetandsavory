import "../MenuPreview/MenuPreview.css";
import Images from "../../images/images";

const MenuPreview = () => {
  return (
    <>
      <article>
        <section>
          <div className="preview">
            <h1>Just a Taste</h1>
            <div className="items">
              <img
                src={Images.eggbenedict}
                alt="plate of eggs benedict"
                className="items"
              />
              <img
                src={Images.parfait}
                alt="two parfait cups"
                className="items"
              />
              <img
                src={Images.blueberryfrenchtoast}
                alt="plate of French toast with blueberries"
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
                src={Images.avocadotoast}
                alt="plate of avocado toast with poached egg"
                className="items"
              />
              <img
                src={Images.fruitpancake}
                alt="plate of pancakes with strawberries and blueberries"
                className="items"
              />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default MenuPreview;
