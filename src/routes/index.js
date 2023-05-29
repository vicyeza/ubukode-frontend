import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
import Signup from "../registrations/Signup";
import Login from "../registrations/Login";
// import Home from "../pages/Home";
import Services from "../pages/Services"
import Plans from "../pages/Plans";
import Navbar from "../components/navbar/Navbar";
import Features from "../pages/Features";
import Footer from "../components/footer/Footer"
const Index = () => {
  return (
    <>
      <Navbar />
        <Routes>

          {/* <Route exact path="/" element={<Home />}/> */}
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/Plans" element={<Plans/>}></Route>
          <Route exact path="/Features" element={<Features/>}></Route>
        </Routes>
      <Footer />
    </>
  );
};

export default Index;
