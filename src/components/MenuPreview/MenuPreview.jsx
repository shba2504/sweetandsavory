import "../MenuPreview/MenuPreview.css";
import Images from "../../images/images";

const MenuPreview = () => {
  return (
    <>
      <section>
        <div className="preview">
          <h1>Just a Taste</h1>
          <div className="items">
            <img
              src="https://unsplash.com/photos/pastry-food-on-plate-j3gz0KReZbA"
              alt="plate of avocado toast with poached egg"
              className="items"
            />

            <img
              src="https://unsplash.com/photos/a-plate-of-food-with-asparagus-and-eggs-tGpBPnc3ZoA"
              alt="plate of eggs benedict"
              className="items"
            />
            <img
              src="https://unsplash.com/photos/toast-bread-with-blueberry-on-black-plate-zcUgjyqEwe8"
              alt="plate of French toast with blueberries"
              className="items"
            />
            <img
              src="https://unsplash.com/photos/round-white-ceramic-plate-filled-with-waffle-hrlvr2ZlUNk"
              alt="breakfast spread"
              className="items"
            />
            <img
              src="https://unsplash.com/photos/black-and-red-cherries-on-white-bowl-nTZOILVZuOg"
              alt="acai bowl with fruit platter"
              className="items"
            />
            <img
              src="https://unsplash.com/photos/fruit-sandwich-on-a-blue-ceramic-plate-aGjP08-HbYY"
              alt="table with breakfast foods"
              className="items"
            />
            <img
              src="https://unsplash.com/photos/brown-and-red-strawberry-cake-on-white-ceramic-plate-y4K7Ydp2z3Y"
              alt="plate of pancakes with strawberries and blueberries"
              className="items"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPreview;
