import React from "react";
import { useForm } from "react-hook-form";

function HookForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">Your Name</label>
      <input type="text" placeholder="e,x John Doe" {...register("userName")} />
      {/* <br /> */}
      <label htmlFor="userEmail">Your Email</label>
      <input
        type="email"
        placeholder="e,x johnDoe@test.com"
        {...register("userEmail")}
      />
      {/* <br /> */}
      <label htmlFor="userPhone">Your Phone</label>
      <input
        type="tel"
        placeholder="+90 125 294 1234"
        {...register("userPhone")}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default HookForm;
