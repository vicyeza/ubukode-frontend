import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:9090/api/user/login",
        data
      );

      setLoading(false);
      console.log(response.data.data);
      localStorage.setItem("token", response.data.data.token);

      navigate("/dashboards");
    } catch (error) {
      setLoading(false);
      console.log(error);
      // Check if the error is due to invalid email or password
      if (error.response && error.response.status === 400) {
        console.log("Invalid email or password");
        alert("Invalid email or password"); // Add an alert or display an error message
      }
    }
  };

  return (
    <div className="hero">
      <div className="signup-box">
        <div className="left-box">
          <h2>Welcome Back!!! </h2>
          <h2>
            To <span style={{ color: "rgb(126, 146, 109)" }}>Ubukode</span>
          </h2>
          <form action="#" onSubmit={handleSubmit(handleLogin)}>
            <input
              className="input-box"
              type="email"
              placeholder="Enter Email"
              name="email"
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
            <p className="errors"> {errors.password?.message} </p>
            <div className="app">
              <input type="checkbox" style={{ marginRight: 10 }} />
              <label htmlFor="">Remember me</label>
            </div>
            {loading ? (
              <button type="submit">
                Loading... <span>&#x27f6;</span>
              </button>
            ) : (
              <button type="submit">
                LOGIN <span>&#x27f6;</span>
              </button>
            )}

            <p style={{ marginTop: 10 }}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
          <h6 style={{ marginTop: 30, textAlign: "center" }}>
            Ubukode &copy; Ric-house
          </h6>
        </div>
        <div className="right-box"></div>
      </div>
    </div>
  );
};

export default Login;
