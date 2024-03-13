import Images from "../../images/images";
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <img src="https://unsplash.com/photos/fruit-salad-on-gray-bowls-HlNcigvUi4Q"alt="breakfast table spread" />
        </div>
        <div>
          <div className="container">
            <h4>Breakfast is our favorite meal of the day.</h4>
            <p>Let’s make it yours too.</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
