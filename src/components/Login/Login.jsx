import React from "react";
import Nav from "../Nav/Nav";
import "../Login/Login.css";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = (props) => {
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
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string().required("No password provided."),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}

                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </form>
            )}
          </Formik>
        </section>
        <br />
        <section>
          <div>
            <button type="submit">Sign In</button>
            <p>Forgot Password?</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default Login;
