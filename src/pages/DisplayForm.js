import React from "react";
import { useForm } from "react-hook-form";

function PersonForm({ value, setValueDisplay }) {
  const { register, handleSubmit, setValue, reset } = useForm();

  React.useEffect(() => {
    setValue("firstName", value.firstName);
    setValue("lastName", value.lastName);
    setValue("age", value.age);
  }, [setValue, value]);

  const onSubmit = (data) => {
    reset();
    setValueDisplay(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" {...register("firstName")} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" {...register("lastName")} />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" {...register("age")} />

      <button type="submit">Clear</button>
    </form>
  );
}

export default PersonForm;
