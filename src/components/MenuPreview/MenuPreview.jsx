import "../MenuPreview/MenuPreview.css";
import Images from "../../images/images";

const MenuPreview = () => {
  return (
    <>
      <article>
        <section>
          <div class="preview">
            <h1>Just a Taste</h1>
            <div class="items">
              <img
                src={Images.eggbenedict}
                alt="plate of eggs benedict"
                class="items1"
              />
              <img src={Images.parfait} alt="two parfait cups" class="items" />
              <img
                src={Images.blueberryfrenchtoast}
                alt="plate of French toast with blueberries"
                class="items2"
              />
              <img
                src={Images.acaibowl}
                alt="acai bowl with fruit platter"
                class="items3"
              />
              <img
                src={Images.spread2}
                alt="table with breakfast foods"
                class="items4"
              />
              <img
                src={Images.avocadotoast}
                alt="plate of avocado toast with poached egg"
                class="items5"
              />
              <img
                src={Images.fruitpancake}
                alt="plate of pancakes with strawberries and blueberries"
                class="items6"
              />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default MenuPreview;
