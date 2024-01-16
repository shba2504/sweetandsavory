import Nav from "../Nav/Nav";
import Images from "../../images/images";
import "../Reservations/Reservations.css";

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
        <br />
        <hr />
        <br />
        <section>
          <div class="sidebar">
            <img
              src={Images.granola}
              alt="bowl of granola with pieces of granola and strawberries scattered on table"
            />
            <form>
              <fieldset>
                <label>Party Size</label>
                <input placeholder="2 Guests" />
              </fieldset>
              <fieldset>
                <label>Date</label>
                <input />
              </fieldset>
              <fieldset>
                <label>Time</label>
                <input />
              </fieldset>
              <button>Search</button>
            </form>
          </div>
        </section>
        <br />
        <hr />
        <br />
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
