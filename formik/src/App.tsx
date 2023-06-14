import { useFormik } from "formik";
import { z } from "zod";
import * as Yup from "yup";

// const schema = z
//   .object({
//     email: z.string().email(),
//     password: z.string().min(8),
//   })
//   .required();
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

const Basic = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: schema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        {...formik.getFieldProps("email")}
      />
      {formik.errors.email ? <p>{formik.errors.email}</p> : null}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        autoComplete="current-password"
        {...formik.getFieldProps("password")}
      />
      {formik.errors.password ? <p>{formik.errors.password}</p> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Basic;
