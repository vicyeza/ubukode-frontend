import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
import Signup from "../registrations/Signup";
import Login from "../registrations/Login";
<<<<<<< HEAD
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
=======
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Plans from "../pages/plans/Plans";
import Navbar from "../components/navbar/Navbar";
import Features from "../pages/features/Features";
import Footer from "../components/footer/Footer";
import Contact from "../pages/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../components/dashboardLayout/dashboard/Dashboard";
import DashRoutes from "./DashRoutes";
import Dashboardlayout from "../components/Dashlayout";
import PublicPages from "../components/dashboardLayout/publicPages/publicPages";
import Users from "../components/dashboardLayout/users/Users";
import MetaData from "../components/dashboardLayout/metaData/MetaData";
import Datas from "../components/dashboardLayout/datas/Datas";
import Analysis from "../components/dashboardLayout/analyisis/Analysis";
import NewUser from "../pages/forms/NewUser";
>>>>>>> b7a43cf (User Dashboard)

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
<<<<<<< HEAD
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
=======
        <Route exact path="/dashboard" element={<Dashboardlayout />}></Route>
        <Route element={<DashRoutes />}>
          <Route exact path="/dashboards" element={<Dashboard />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/pages" element={<PublicPages />}></Route>
          <Route exact path="/analyisis" element={<Analysis />}></Route>
          <Route exact path="/datas" element={<Datas />}></Route>
          <Route exact path="/newUser" element={<NewUser />}></Route>
          <Route exact path="/metadata" element={<MetaData />}></Route>
        </Route>
>>>>>>> b7a43cf (User Dashboard)
      </Routes>
      <Footer />
    </>
  );
};

export default Index;
