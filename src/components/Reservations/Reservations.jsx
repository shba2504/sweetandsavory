import Nav from "./Nav/Nav";
import Images from "../../images/images";

const Reservations = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div className="preview">
            <h1>Reservations</h1>
            <img
              src={Images.exterior}
              alt="wooden table with plate and glass settings"
            />
          </div>
        </section>
        <section>
          <div>
            <img
              src={Images.granola}
              alt="bowl of granola with pieces of granola and strawberries scattered on table"
            />
            <form>
              <fieldset>
                <label>
                  Party Size
                  <input />
                </label>
                <label>
                  Date
                  <input />
                </label>
                <label>
                  Time
                  <input />
                </label>
              </fieldset>
            </form>
          </div>
        </section>
        <hr />
        <div className="bottom">
          <img
            src={Images.greenrestaurant}
            alt="restaurant interior with lots of plants"
          />
        </div>
      </article>
    </>
  );
};

export default Reservations;
