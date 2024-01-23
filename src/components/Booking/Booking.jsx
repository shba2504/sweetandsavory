import Nav from "../Nav/Nav";
import "../Booking/Booking.css";
import Images from "../../images/images";
import { useState } from "react";

const Booking = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventdefault();
    clearForm();
  };

  const handleClose = () => {
    setOpen(false);
    e.preventdefault();
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmailAddress("");
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
              <form>
                <div className="booking-input">
                  <label></label>
                  <input
                    id={firstName}
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                  />
                  <label></label>
                  <input
                    id={lastName}
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <label></label>
                  <input
                    id={emailAddress}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    required
                  />

                  <textarea
                    type="text"
                    placeholder="Special Requests or Accommodations"
                  />
                  <br />
                </div>
              </form>
              <div className="submit-btn">
                <button
                  type="submit"
                  disabled={!firstName || !lastName || !emailAddress}
                  onClick={handleSubmit}
                  className="form-container"
                >
                  Confirm Reservation
                </button>

                {open && (
                  <>
                    <div className="active" id="modal">
                      <div className="modal-header">
                        <button
                          type="submit"
                          onClick={handleClose}
                          className="close-btn"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body">
                        Booking has been confirmed!
                      </div>
                    </div>
                    <div className="active" id="modal-overlay"></div>
                  </>
                )}
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
