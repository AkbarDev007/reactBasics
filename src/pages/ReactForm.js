// import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PersonForm from "./DisplayForm";
// const CREATE_USER = gql`
//   mutation CreateUser($name: String!, $age: Int!) {
//     createProduct(record: { name: $name, age: $age }) {
//       record {
//         name
//       }
//     }
//   }
// `;
export default function ReactForm() {
  const [userData, setuserData] = useState("");
  const [display, setDisplay] = useState(false);
  // const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
  //   variables: {
  //     name: userData.firstName,
  //     age: userData.age,
  //   },
  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    setuserData(formData);
    setDisplay(true);
    reset();
  };
  return (
    <>
    <Link to = {`/`}>
    <h3>Back</h3>
    </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
       <div class="form-group">
       <label>First Name</label>
        <input class="form-control"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p style={{color:"red",fontSize:"small"}}>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p style={{color:"red",fontSize:"small"}}>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p style={{color:"red",fontSize:"small"}}>Alphabetical characters only</p>
        )}
        <label>Laste Name</label>
        <input class="form-control" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === "pattern" && (
          <p style={{color:"red",fontSize:"small"}}>Alphabetical characters only</p>
        )}
        <label>Age</label>a
        <input class="form-control" {...register("age", { min: 18, max: 99 })} />
        {errors.age && (
          <p style={{color:"red",fontSize:"small"}}>You Must be older then 18 and younger then 99 years old</p>
        )}
        <input  class="btn btn-primary"type="submit" />
       </div>
      </form>
      <div
        style={{
          marginTop: "10rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {display && (
          <PersonForm value={userData} setValueDisplay={setDisplay} />
        )}
      </div>
    </>
  );
}
