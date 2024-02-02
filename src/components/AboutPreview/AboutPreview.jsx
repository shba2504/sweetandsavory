import Images from "../../images/images";
import "../AboutPreview/AboutPreview.css";

const AboutPreview = () => {
  return (
    <>
      <article>
        <section>
          <div className="preview">
            <h1>Join us for breakfast!</h1>
            <div className="aboutpreview">
              <div>
                <img
                  src={Images.travel}
                  alt="fold out map in a car"
                  loading="lazy"
                />
              </div>
              <div className="story">
                <h2>Our Story</h2>
                <p>
                  Sweet and Savory was born out of Mark and Liza’s passion for
                  breakfast cuisine; a passion which led them on a trip across
                  the world.{" "}
                </p>
                <p>
                  Follow their adventures as they experience delicious breakfast
                  in the places where they originated.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default AboutPreview;
