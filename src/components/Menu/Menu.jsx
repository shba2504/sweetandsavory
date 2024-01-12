import Nav from "./Nav/Nav";

const Menu = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div className="preview">
            <h1>Menu</h1>
          </div>
          <div className="slider">
            <h2>Image Slider of Menu Photos</h2>
          </div>
          <h2>This Week's Specials</h2>
        </section>
        <section>
          <div className="specials">
            <h3>Sweet</h3>
            <h3>Savory</h3>
          </div>
        </section>
      </article>
    </>
  );
};

export default Menu;
