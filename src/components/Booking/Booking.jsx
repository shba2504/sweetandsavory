import Nav from "./Nav/Nav";

const Booking = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div class="preview">
            <h1>Booking</h1>
          </div>
        </section>
        <section>
          <form>
            <fieldset>
              <h2>Guest Information</h2>
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
            </fieldset>
          </form>
        </section>
        <section>
          <div>
            <button></button>
            <form>
              <label>
                <input type="checkbox" />
                <p>
                  Join our newsletter for more breakfast cuisine and recipes
                  from across the world.
                </p>
              </label>
            </form>
          </div>
        </section>
      </article>
    </>
  );
};

export default Booking;
