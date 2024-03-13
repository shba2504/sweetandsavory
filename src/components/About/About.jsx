import Images from "../../images/images";
import "../About/About.css";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="preview">
          <h1>About Us</h1>
          <img src={Images.globe} alt="a half-globe" />
        </div>
        <section>
          <div className="about">
            <img
              src={Images.travelfood}
              alt="plate of pancakes with person eating"
            />
            <p>
              From chicken and waffles in the American South to Danish pancakes
              to North African shakshouka and French toast in its Roman
              origin...(yes, you read that right).
            </p>
            <p>
              Mark and Liza have experienced a variety of different cuisines
              from all across the world.
            </p>
            <img
              src={Images.shakshouka}
              alt="skillet with tomato sauce and eggs"
            />
            <img
              src={Images.DanishPancakes}
              alt="Danish pancakes that look like mini-donuts and sauce"
            />
            <img src={Images.travelfood2} alt="person slicing into pancakes" />
            <img
              src={Images.gathering}
              alt="people toasting over plates of food"
            />
            <p>
              Inspired by simple ingredients executed perfectly, Mark and Liza
              opened Sweet and Savory in 2008 to bring people together in the
              best way---over great food.
            </p>
          </div>
        </section>
        <section>
          <div className="bottom">
            <img
              src={Images.gathering2}
              alt="people eating over a table of food"
            />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default About;
