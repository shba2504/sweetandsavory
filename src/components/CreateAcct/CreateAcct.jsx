const CreateAcct = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div className="preview">
            <h1>Create an Account</h1>
            <p>
              Enter your account details below or <a>log in</a>
            </p>
          </div>
        </section>
        <section>
          <div>
            <form>
              <fieldset>
                <label>Username</label>
                <input />
                <label>Date of Birth (optional)</label>
                <input />
                <label>Email</label>
                <input />
                <label>Password</label>
                <input />
              </fieldset>
            </form>
          </div>
        </section>
        <section>
          <div>
            <button>Sign In</button>
          </div>
        </section>
      </article>
    </>
  );
};
