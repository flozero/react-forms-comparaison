import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.type === "required" && (
        <p role="alert">Email is required</p>
      )}
      {errors.email?.type === "pattern" && (
        <p role="alert">It should be an email</p>
      )}
      <label>Password</label>
      <input
        type="text"
        placeholder="Password"
        aria-invalid={errors.password ? "true" : "false"}
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password?.type === "required" && (
        <p role="alert">Password is required</p>
      )}
      {errors.password?.type === "minLength" && (
        <p role="alert">Password should be at least 8 chars</p>
      )}
      <button>Submit</button>
    </form>
  );
}
