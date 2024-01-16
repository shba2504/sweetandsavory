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
        <section>
          <form class="booking">
            <h4>Guest Information</h4>
            <p>Enter your details below to book the reservation.</p>
            <label></label>
            <input placeholder="First Name" />
            <label></label>
            <input placeholder="Last Name" />
            <label></label>
            <input placeholder="Email" />
            <label></label>
            <textarea placeholder="Special Requests or Accommodations" />
            <br />
            <button type="submit">Confirm Reservation</button>
          </form>
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
