import Nav from "../Nav/Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div className="preview">
            <h1>Welcome!</h1>
            <p>
              Log in below or <a href="/">create an account</a>
            </p>
          </div>
        </section>
        <section>
          <div>
            <form>
              <label>Email</label>
              <input />
              <label>Password</label>
              <input />
            </form>
          </div>
        </section>
        <br />
        <section>
          <div>
            <button>Sign In</button>
            <p>Forgot Password?</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default Login;
