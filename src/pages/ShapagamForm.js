import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const db = [
  {
    id: 1,
    name: "Akbar",
    email: "akbarkamran@gmail.com",
    address: "Wapdatown Lahore",
    phone: "923204669876",
  },
];
export default function ShapagamForm() {
  const [employeeData, setEmployeedata] = useState(db);
  const [employeeForm, setEmplyeeForm] = useState(false);
  const [editEmplyeeForm, seteditEmplyeeForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    // console.log("Here we are", formData);
    db.push({ ...formData, id: employeeData.length + 1 });
    setEmployeedata(db);
    reset();
    setEmplyeeForm(false);
  };
  const editSubmit = (editData) => {
    debugger
    seteditEmplyeeForm(false);
    const index = db.findIndex((entry) => entry.id === editData.id);
    if (index === -1) {
      console.log("Data not found");
    } else {
      console.log(editData.name);
      db[index].email = editData.email;
      db[index].name = editData.name;
      db[index].phone = editData.phone;
      db[index].address = editData.address;
      console.log(db[index]);
      console.log("this is db", db);
      setEmployeedata(db);
      // console.log("Data updated:", db[index]);
    }
  };
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const filteredEmployeeData = employeeData.filter(
        (employee) => employee.id !== id
      );
      setEmployeedata(filteredEmployeeData);
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Link to={`/`}>
          <h3>Back</h3>
        </Link>
      </div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => {
                      setEmplyeeForm(true);
                    }}
                  >
                    <i className="material-icons">&#xE147;</i>
                    <span>Add New Employee</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee) => {
                  return (
                    <>
                      <tr key={employee.id}>
                        <td
                          onClick={() => {
                            navigate(`/employee/${employee.id}`);
                          }}
                        >
                          {employee.name}
                        </td>
                        <td
                          onClick={() => {
                            navigate(`/employee/${employee.id}`);
                          }}
                        >
                          {employee.email}
                        </td>
                        <td
                          onClick={() => {
                            navigate(`/employee/${employee.id}`);
                          }}
                        >
                          {employee.address}
                        </td>
                        <td
                          onClick={() => {
                            navigate(`/employee/${employee.id}`);
                          }}
                        >
                          {employee.phone}
                        </td>

                        <td>
                          <a
                            href="#editEmployeeModal"
                            className="edit"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Edit"
                              onClick={() => {
                                setValue("name", employee.name);
                                setValue("address", employee.address);
                                setValue("email", employee.email);
                                setValue("phone", employee.phone);
                                setValue("id", employee.id);
                                seteditEmplyeeForm(true);
                              }}
                            >
                              &#xE254;
                            </i>
                          </a>
                          <div id="editEmployeeModal" className="modal fade">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                {editEmplyeeForm && (
                                  <form onSubmit={handleSubmit(editSubmit)}>
                                    <div className="modal-header">
                                      <h4 className="modal-title">
                                        Edit Employee
                                      </h4>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                        onClick={() => {
                                          seteditEmplyeeForm(false);
                                        }}
                                      >
                                        &times;
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <div className="form-group">
                                        <label>Name</label>
                                        <input
                                          {...register("name", {
                                            required: true,
                                            maxLength: 20,
                                          })}
                                          className="form-control"
                                        />
                                        {errors?.name?.type === "required" && (
                                          <p
                                            style={{
                                              color: "red",
                                              fontSize: "small",
                                            }}
                                          >
                                            This field is required
                                          </p>
                                        )}
                                        {errors?.name?.type === "maxLength" && (
                                          <p
                                            style={{
                                              color: "red",
                                              fontSize: "small",
                                            }}
                                          >
                                            First name cannot exceed 20
                                            characters
                                          </p>
                                        )}
                                        {errors?.name?.type === "pattern" && (
                                          <p
                                            style={{
                                              color: "red",
                                              fontSize: "small",
                                            }}
                                          >
                                            Alphabetical characters only
                                          </p>
                                        )}
                                      </div>
                                      <div className="form-group">
                                        <label>Email</label>
                                        <input
                                          type="email"
                                          {...register("email", {
                                            required: true,
                                          })}
                                          className="form-control"
                                        />
                                        {errors?.email?.type === "required" && (
                                          <p
                                            style={{
                                              color: "red",
                                              fontSize: "small",
                                            }}
                                          >
                                            This field is required
                                          </p>
                                        )}
                                      </div>
                                      <div className="form-group">
                                        <label>Address</label>
                                        <textarea
                                          {...register("address")}
                                          className="form-control"
                                        ></textarea>
                                      </div>
                                      <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                          {...register("phone")}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <input
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal"
                                        value="Cancel"
                                        onClick={() => {
                                          reset();
                                          seteditEmplyeeForm(false);
                                        }}
                                      />
                                      <input
                                        type="submit"
                                        className="btn btn-success"
                                      />
                                    </div>
                                  </form>
                                )}
                              </div>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="delete"
                            data-toggle="modal"
                            onClick={() => {
                              deleteEmployee(employee.id);
                            }}
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              &#xE872;
                            </i>
                          </a>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            {employeeForm && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-header">
                  <h4 className="modal-title">Add Employee</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      {...register("name", {
                        required: true,
                        maxLength: 20,
                      })}
                      className="form-control"
                    />
                    {errors?.name?.type === "required" && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        This field is required
                      </p>
                    )}
                    {errors?.name?.type === "maxLength" && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        First name cannot exceed 20 characters
                      </p>
                    )}
                   
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: true,
                      })}
                      className="form-control"
                    />
                    {errors?.email?.type === "required" && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      {...register("address")}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input {...register("phone")} className="form-control" />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                    onClick={() => {
                      reset();
                    }}
                  />
                  <input type="submit" className="btn btn-success" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
