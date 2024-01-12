import Nav from "./Nav/Nav";

const Menu = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div class="preview">
            <h1>Menu</h1>
          </div>
          <div class="slider">
            <h2>Image Slider of Menu Photos</h2>
          </div>
          <h2>This Week's Specials</h2>
        </section>
        <section>
          <div class="specials">
            <h3>Sweet</h3>
            <h3>Savory</h3>
          </div>
        </section>
      </article>
    </>
  );
};

export default Menu;
