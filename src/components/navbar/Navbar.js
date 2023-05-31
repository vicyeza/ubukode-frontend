import React, { useState } from "react";
import "./navbar.css";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const navigate = useNavigate();
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#gg" className="nav__brand">
        Ubukode
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="services" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="features" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="plans" className="nav__link">
            Plans
          </a>
        </li>
        <li className="nav__item">
          <a href="contact" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="login" className="nav__linkss">
            Login
          </a>
        </li>
        <button className="btn" onClick={() => navigate("/signup")}>
          Signup{" "}
        </button>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
