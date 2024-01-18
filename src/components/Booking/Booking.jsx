import Nav from "../Nav/Nav";
import "../Booking/Booking.css";
import Images from "../../images/images";

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
        <section className="booking">
          <h4>Guest Information</h4>
          <p>Enter your details below to book the reservation.</p>
          <div className="input-container">
            <div className="booking-container">
              <form className="input-group">
                <div>
                  <input type="text" placeholder="First Name" />

                  <input type="text" placeholder="Last Name" />

                  <input type="email" placeholder="Email" />

                  <textarea
                    type="text"
                    placeholder="Special Requests or Accommodations"
                  />
                  <br />
                  <button type="submit" className="form-container">
                    Confirm Reservation
                  </button>
                </div>
              </form>
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
