import React from "react";
import "./Navbar.css";
import logo from "./images/ck-removebg-preview.png";
import Hamburger from "./Hamburger/Hamburger";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="container side">
          <div className="search-field">
            <input type="search" placeholder="Search here" />
          </div>
        </div>
      <Hamburger/>
      </nav>
    </>
  );
}

export default Navbar;
