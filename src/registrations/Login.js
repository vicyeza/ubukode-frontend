import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="signup-box">
        <div className="left-box">
          <h2>Welcome Back!!! </h2>
          <h2>
            To <span style={{ color: "rgb(126, 146, 109)" }}>Ubukode</span>
          </h2>
          <form
            action="#"
            onSubmit={handleSubmit(async (data) => {
              console.log(data);
              try {
                setLoading(true);
                const response = await axios.post(
                  "http://localhost:9090/api/user/login",
                  data
                );

                toast.success("Logged In successfully");
                setLoading(false);
                console.log(response.data.data);
                localStorage.setItem("token", response.data.data.token);

                navigate("/dashboards");
              } catch (error) {
                setLoading(false);
                toast.error(error.response.data.error);
              }
            })}
          >
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
              <label htmlFor="">Remeber me</label>
            </div>
            <button type="Submit" >
              {loading && (
                <>
                  <div className="grid-1 my-auto h-5 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-white border-4 "></div>
                  <div className="grid-2 my-auto -mx-1"> </div>
                </>
              )}
              LOGIN <span>&#x27f6;</span>
            </button>
            <ToastContainer />
            <p style={{ marginTop: 10 }}>
              Don't have Account <Link to="/signup">Sign up</Link>
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
