import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik submitted:", values);
    alert("Registration successful!");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto p-4 space-y-4">
        <div>
          <label>Username</label>
          <Field
            type="text"
            name="username"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500"
          />
        </div>

        <div>
          <label>Email</label>
          <Field
            type="email"
            name="email"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500"
          />
        </div>

        <div>
          <label>Password</label>
          <Field
            type="password"
            name="password"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
