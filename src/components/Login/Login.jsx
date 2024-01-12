import Nav from "./Nav/Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <article>
        <section>
          <div class="preview">
            <h1>Welcome Back!</h1>
            <p>
              Login below or <a>create an account</a>
            </p>
          </div>
        </section>
        <section>
          <div>
            <form>
              <fieldset>
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
            <p>Forgot Password?</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default Login;
