## React Yup - Formik

Formik is a popular library for handling forms in React applications. It simplifies the process of building and managing forms by providing a set of utilities and components that make form development more straightforward and efficient.

Yup is a JavaScript library commonly used for object schema validation. It's often used in conjunction with form libraries like Formik to validate form data in React applications. Yup allows you to define validation schemas declaratively, making it easy to validate data and provide helpful error messages.

---

```jsx
import { useFormik } from "formik";
import * as Yup from "yup";

const MyChild = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    // Validate the form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be less than 20 characters.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required"),
    }),
    // Handle form submission
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label
        className={`block pb-2 text-sm font-semibold ${
          formik.touched.name && formik.errors.name ? "text-red-500" : ""
        }`}
        htmlFor="name">
        {formik.touched.name && formik.errors.name
          ? formik.errors.name
          : "Username"}
      </label>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your name"
      />
      <label
        className={`block pb-2 mt-4 text-sm font-semibold ${
          formik.touched.email && formik.errors.email ? "text-red-500" : ""
        }`}
        htmlFor="email">
        {formik.touched.email && formik.errors.email
          ? formik.errors.email
          : "Email"}
      </label>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your email"
      />
      <button type="submit">Join us Today!</button>
    </form>
  );
};

export default MyChild;
```
