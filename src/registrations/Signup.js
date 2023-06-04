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

  const handleSignUp = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:9090/api/user/create",
        data
      );
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
      console.log(response.data.data);
      localStorage.setItem("token", response.data.data.token);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error);
      // Check if the error is due to invalid email or password
      if (error.response && error.response.status === 400) {
        console.log("Invalid email or password");
      }
    }
  };

  return (
    <div className="hero">
      <div className="signup-box">
        <div></div>
        <div className="left-box">
          <h2>Creat Account!! </h2>
          <h2>
            To <span style={{ color: "rgb(126, 146, 109)" }}>Ubukode</span>
          </h2>
          <form action="#" onSubmit={handleSubmit(handleSignUp)}>
            <input
              className="input-box"
              type="text"
              name="firstname"
              placeholder="Enter first Name"
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
              {...register("email", { required: "please enter your email" })}
            />
            <p className="errors"> {errors.email?.message}</p>
            <input
              className="input-box"
              type="password"
              name="password"
              placeholder="Enter a password"
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
                Loading... <span>&#x27f6;</span>
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
