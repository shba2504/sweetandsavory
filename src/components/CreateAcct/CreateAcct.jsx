import React from "react";
import "../CreateAcct/CreateAcct.css";
import Nav from "../Nav/Nav";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const CreateAcct = () => {
  return (
    <>
      <Nav />
      <div className="preview">
        <h1>Create an Account</h1>
        <p>
          Enter your information below to create an account or{" "}
          <a href="#">Log In</a>
        </p>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptedNewsletter: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum."),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
          acceptedNewsletter: Yup.boolean().optional,
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput placeholder="First Name" name="firstName" type="text" />

          <MyTextInput placeholder="Last Name" name="lastName" type="text" />

          <MyTextInput placeholder="Email Address" name="email" type="email" />
          <MyTextInput placeholder="Password" name="Password" type="password" />
          <MyTextInput
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <br />
          <div>
            <button type="submit">Sign In</button>
          </div>
          <MyCheckbox name="acceptedNewsletter">
            Join our newsletter for more breakfast cuisine and recipes from
            across the world!
          </MyCheckbox>
        </Form>
      </Formik>
      <br />
    </>
  );
};

export default CreateAcct;
