import { useFormik } from "formik";
import { z } from "zod";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .required();

const Basic = () => {
  const validate = (values) => {
    const errors = {};

    const { success, error } = schema.safeParse(values);

    if (!success) {
      error.issues.forEach((e) => {
        errors[e.path[0]] = e.message;
      });
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <p role="alert">{formik.errors.email}</p> : null}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? (
        <p role="alert">{formik.errors.password}</p>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Basic;
