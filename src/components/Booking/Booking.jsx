import Nav from "../Nav/Nav";
import "../Booking/Booking.css";
import Images from "../../images/images";
import { useState } from "react";
import { FirstName } from "../Form/FirstName";
import { LastName } from "../Form/LastName";
import { EmailAddress } from "../Form/EmailAddress";
import { TextArea } from "../Form/TextArea";

const Booking = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventdefault();
  };

  const handleClose = () => {
    setOpen(false);
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
              <form>
                <div className="booking-input">
                  <FirstName />
                  <LastName />
                  <EmailAddress />
                  <TextArea />
                  <br />
                </div>
              </form>
              <div className="submit-btn">
                <button type="submit" onClick={handleSubmit}>
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
                        Your reservation has been confirmed!
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
