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
            <label>First Name</label>
            <input />
            <label>Last Name</label>
            <input />
            <label>Email</label>
            <input />
            <label>Special Requests or Accommodations:</label>
            <textarea />
            <br />
            <button type="submit">Confirm Reservation</button>
          </form>
        </section>
        <br />
        <hr />
        <br />
        <div class="bottom">
          <img src={Images.sweettoast} alt="" />
        </div>
      </article>
    </>
  );
};

export default Booking;
