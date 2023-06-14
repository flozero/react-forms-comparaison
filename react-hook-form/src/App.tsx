import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="text"
        placeholder="Email"
        {...register("email")}
        aria-invalid={errors.email ? "true" : "false"}
      />
      <p>{errors.email?.message}</p>
      <label>Password</label>
      <input
        type="text"
        placeholder="Password"
        aria-invalid={errors.password ? "true" : "false"}
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <button>Submit</button>
    </form>
  );
}
