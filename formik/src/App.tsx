import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .required();

const Basic = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};

        const { success, error } = schema.safeParse(values);

        if (!success) {
          error.issues.forEach((e) => {
            errors[e.path[0]] = e.message;
          });
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" />
          <button disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
