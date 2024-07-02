import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <p>Sanjoul</p>
      </div>
      <div className="menu-container">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
