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
    <>
      <h2>Output</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <br />
          <label htmlFor="firstName">First Name:</label>
          <input
            readOnly
            class="form-control"
            type="text"
            id="firstName"
            {...register("firstName")}
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            readOnly
            class="form-control"
            type="text"
            id="lastName"
            {...register("lastName")}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <input
            readOnly
            class="form-control"
            type="number"
            id="age"
            {...register("age")}
          />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button class="btn btn-primary" type="submit">
              Clear
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default PersonForm;
