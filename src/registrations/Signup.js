import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [values, setValues] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  // });

  // HANDLE CHANGES
  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const registers = (e) => {
  //   e.preventDefault();
  //   Axios.post("http://localhost:9090/api/user/create/", {
  //     firstName: values.firstname,
  //     lastName: values.lastname,
  //     email: values.email,
  //     password: values.password,
  //   }).then((response) => {
  //     console.log(response);
  //     console.log("Application Saved Successfully");
  //     toast.success("User Registered Successfully", {
  //       position: "top-right",
  //       autoClose: 500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //     // Clear the input values
  //     setValues({
  //       firstname: "",
  //       lastname: "",
  //       email: "",
  //       password: "",
  //     });
  //   });
  // };

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
          <form
            action="#"
            onSubmit={handleSubmit(async (data) => {
              try {
                setLoading(true);
                await axios.post("http://localhost:9090/api/user/create", data);
                toast.success("User Added Successfully", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                setLoading(false);
                navigate("/login");
              } catch (err) {
                setLoading(false);
                toast.error(err.response.data.error);
              }
            })}
          >
            <input
              className="input-box"
              type="text"
              name="firstname"
              placeholder="Enter first Name"
              // value={values.firstname}
              // onChange={handleChange}
              {...register("firstName", {
                required: "please enter your First name",
              })}
            />
            <p className="errors"> {errors.firstName?.message}</p>
            <input
              className="input-box"
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              // value={values.lastname}
              // onChange={handleChange}
              {...register("lastName", {
                required: "please enter your Last name",
              })}
            />
            <p className="errors"> {errors.lastName?.message}</p>
            <input
              className="input-box"
              type="email"
              name="email"
              placeholder="Enter Email"
              // value={values.email}
              // onChange={handleChange}
              {...register("email", { required: "please enter your email" })}
            />
            <p className="errors"> {errors.email?.message}</p>
            <input
              className="input-box"
              type="password"
              name="password"
              placeholder="Enter a password"
              // value={values.password}
              // onChange={handleChange}
              {...register("password", {
                required: "please enter password",
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters",
                },
              })}
            />
            <p className="errors"> {errors.password?.message}</p>
            {loading ? (
              <button type="Submit">
                Loading <span>&#x27f6;</span>
              </button>
            ) : (
              <button type="Submit">
                SIGN UP <span>&#x27f6;</span>
              </button>
            )}
            <p style={{ marginTop: 10 }}>
              Already have Account <Link to="/login">Login</Link>
            </p>
          </form>
          <h6 style={{ marginTop: 10, textAlign: "center" }}>
            Ubukode &copy; Ric-house
          </h6>
        </div>
        <div className="right-box"></div>
      </div>
    </div>
  );
};

export default Signup;
