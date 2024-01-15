import Nav from "../Nav/Nav";
import "../Booking/Booking.css";

const Booking = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div className="preview">
            <h1>Booking</h1>
          </div>
        </section>
        <section>
          <form>
            <fieldset>
              <h3>Guest Information</h3>
              <label>
                First Name
                <input />
              </label>
              <label>
                Last Name
                <input />
              </label>
              <label>
                Email
                <input />
              </label>
              <label>
                Special Requests or Accommodations:
                <input />
              </label>
              <button>Confirm Reservation</button>
            </fieldset>
          </form>
        </section>
      </article>
    </>
  );
};

export default Booking;
