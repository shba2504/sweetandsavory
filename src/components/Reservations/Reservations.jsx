import Nav from "../Nav/Nav";
import Images from "../../images/images";
import "../Reservations/Reservations.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Reservations = () => {
  const [party, setParty] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    setParty("");
    setDate("");
    setTime("");
  };

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
              loading="lazy"
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
              loading="lazy"
            />
            <form onSubmit={handleSubmit} className="reservations-container">
              <fieldset className="reservations-input">
                <label htmlFor="party">Select Party Size</label>
                <input
                  id="party"
                  type="number"
                  min="2"
                  max="10"
                  value={party}
                  placeholder="2 Guests"
                  onChange={(e) => setParty(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset className="reservations-input">
                <label htmlFor="date">Select Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset className="reservations-input">
                <label htmlFor="time">Select Time</label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <option> </option>
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                  <option>9:30 PM</option>
                </select>
              </fieldset>
              <NavLink to="/booking">
                <button
                  type="submit"
                  disabled={!party || !date || !time}
                  aria-label="submit button, disabled until all required fields completed"
                  onClick={scrollToTop}
                >
                  Book Reservation
                </button>
              </NavLink>
            </form>
          </div>
        </section>
        <div className="bottom">
          <img
            src={Images.greenrestaurant}
            alt="restaurant interior with lots of plants"
            loading="lazy"
          />
        </div>
      </article>
    </>
  );
};

export default Reservations;
