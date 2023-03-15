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
     <div class="form-group">
     <label htmlFor="firstName">First Name:</label>
      <input class="form-control" type="text" id="firstName" {...register("firstName")} />

      <label htmlFor="lastName">Last Name:</label>
      <input class="form-control" type="text" id="lastName" {...register("lastName")} />

      <label htmlFor="age">Age:</label>
      <input class="form-control" type="number" id="age" {...register("age")} />

      <button class="btn btn-primary" type="submit">Clear</button>
     </div>
    </form>
  );
}

export default PersonForm;
