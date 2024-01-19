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
          <h3>Guest Information</h3>
          <p>Enter your details below to book the reservation.</p>
          <div className="">
            <div className="booking-container">
              <form>
                <div className="booking-input">
                  <label></label>
                  <input type="text" placeholder="First Name" required />
                  <label></label>
                  <input type="text" placeholder="Last Name" required />
                  <label></label>
                  <input type="email" placeholder="Email" required />

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
