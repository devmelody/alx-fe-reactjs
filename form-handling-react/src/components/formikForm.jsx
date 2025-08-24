import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationFormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik Form submitted:", values);
        alert("Registration Successful!");
        resetForm();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto p-6 border rounded-xl shadow-md">
          <h2 className="text-xl font-bold">Register with Formik</h2>

          <div>
            <label className="block font-medium">Username</label>
            <Field
              type="text"
              name="username"
              className="border p-2 w-full rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="border p-2 w-full rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <Field
              type="password"
              name="password"
              className="border p-2 w-full rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationFormikForm;
