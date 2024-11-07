"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseConfig";
import { useRouter } from "next/navigation";

interface Inputs {
  email: string,
  password: string,
};

export default function SignUpModules() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    const {email, password} = data;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // const user = userCredential.user;
    router.push("/dashboard");
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
  });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" className="border-2 border-black" {...register("email")} />
      {errors.email && <span>This field is required</span>}
      
      <input type="text" className="border-2 border-black" {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}