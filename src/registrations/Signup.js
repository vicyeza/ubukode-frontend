import React, { useState } from "react";
// import Link from "react-router-dom"
// import "./signup.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
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
        autoClose: 2000,
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <div className="hero">
      <div className="signup-box">
        <div></div>
        <div className="left-box">
          <h2>Creat Account!! </h2>
          <h2>
            To <span style={{ color: "rgb(126, 146, 109)" }}>Ubukode</span>
          </h2>
          <form>
            <input
              className="input-box"
              type="text"
              name="firstname"
              placeholder="Enter first Name"
              value={values.firstname}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              value={values.lastname}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="password"
              name="password"
              placeholder="Enter a password"
              value={values.password}
              onChange={handleChange}
            />
            <button type="Submit" onClick={registers}>
              SIGN UP <span>&#x27f6;</span>
            </button>
            <p style={{ marginTop: 10 }}>
              Already have Account <Link to="/login">Login</Link>
            </p>
          </form>
          <h6 style={{ marginTop: 10, textAlign: "center" }}>
            Ubukode &copy; Ric-house
          </h6>
        </div>
        <div className="right-box">
          {/* <img src={ubukodeImg} alt=""  /> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
