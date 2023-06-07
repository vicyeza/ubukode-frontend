import React, { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "./newUser.css";

export default function NewUser() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // HANDLE CHANGES
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const registers = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:9090/api/user/create/", {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
      console.log("Application Saved Successfully");
      toast.success("User Registered Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // Clear the input values
      setValues({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    });
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Add New User</h1>
      <form className="newUserForm" onSubmit={registers}>
        <div className="newUserItem">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastname"
            required
            value={values.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
