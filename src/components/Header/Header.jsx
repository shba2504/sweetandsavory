import Images from "../../images/images";
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <article>
          <section>
            <img src={Images.breakfastspread} alt="breakfast table spread" loading="lazy"/>
          </section>
          <section>
            <div className="container">
              <h4>Breakfast is our favorite meal of the day.</h4>
              <p>Let’s make it yours too.</p>
            </div>
          </section>
        </article>
      </header>
    </>
  );
};

export default Header;
