import Nav from "../Nav/Nav";
import "../Booking/Booking.css";
import Images from "../../images/images";
import { FirstName } from "../Form/FirstName";
import { LastName } from "../Form/LastName";
import { EmailAddress } from "../Form/EmailAddress";
import { TextArea } from "../Form/TextArea";
import { NavLink } from "react-router-dom";

const Booking = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <>
      <Nav />
      <article>
        <section>
          <div className="preview">
            <h1>Booking</h1>
          </div>
        </section>
        <section className="booking">
          <h3>Guest Information</h3>
          <p>Enter your details below to book the reservation.</p>
          <div>
            <div className="booking-container">
              <form onSubmit={handleSubmit}>
                <div className="booking-input">
                  <FirstName />
                  <LastName />
                  <EmailAddress />
                  <TextArea />
                  <br />
                </div>
              </form>
              <div className="submit-btn">
                <NavLink to="/confirmation">
                  <button
                    type="submit"
                    aria-label="submit button, complete all required fields before submitting"
                  >
                    Confirm Reservation
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <br />

        <br />
        <div class="bottom">
          <img src={Images.sweettoast} alt="" />
        </div>
      </article>
    </>
  );
};

export default Booking;
