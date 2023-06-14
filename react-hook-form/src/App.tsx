import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";

type Inputs = {
  email: string;
  password: string;
};

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const { isSubmitting } = useFormState({ control });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  useEffect(() => console.log("Render times:"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        {...register("email")}
        aria-invalid={errors.email ? "true" : "false"}
      />
      <p role="alert">{errors.email?.message}</p>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        aria-invalid={errors.password ? "true" : "false"}
        {...register("password")}
      />
      <p role="alert">{errors.password?.message}</p>
      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
}
