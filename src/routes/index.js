import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
import Signup from "../registrations/Signup";
import Login from "../registrations/Login";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Plans from "../pages/Plans";
import Navbar from "../components/navbar/Navbar";
import Features from "../pages/Features";
import Footer from "../components/footer/Footer";
import Contact from "../pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../pages/Dashboard";

const Index = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Plans" element={<Plans />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/Features" element={<Features />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Index;
