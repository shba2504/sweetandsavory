import Images from "../../images/images";

const AboutPreview = () => {
  return (
    <>
      <article>
        <section>
          <div class="preview">
            <h1>Reserve a Table</h1>
            <div class="aboutpreview">
              <img src={Images.travel} alt="fold out map in a car" />
              <h2>Our Story</h2>
              <p>
                Sweet and Savory was born out of Mark and Liza’s passion for
                breakfast cuisine; a passion which led them on a trip across the
                world. Follow their adventures as they experience delicious
                breakfast in the places where they originated.
              </p>
            </div>
          </div>
        </section>
        <section></section>
      </article>
    </>
  );
};

export default AboutPreview;
