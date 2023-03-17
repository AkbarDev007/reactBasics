import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { db } from "./ShapagamForm";
export default function EmployeeData() {
  const { id } = useParams();
  const [emplyeeData, setEmployeeData] = useState(db);
  useEffect(() => {
    const index = db.findIndex((entry) => entry.id === Number(id));
    setEmployeeData(db[index]);
  }, []);
  return (
    <>
      <Link to={`/shapagamForm`}>
        <h3> Go Back</h3>
      </Link>
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
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr key={emplyeeData.id}>
                    <td>{emplyeeData.name}</td>
                    <td>{emplyeeData.email}</td>
                    <td>{emplyeeData.address}</td>
                    <td>{emplyeeData.phone}</td>
                  </tr>
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
