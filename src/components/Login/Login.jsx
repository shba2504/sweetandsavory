import Nav from "../Nav/Nav";
import "../Login/Login.css";

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
              <div>
                <label>Email</label>
                <input />
              </div>
              <div>
                <label>Password</label>
                <input />
              </div>
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
