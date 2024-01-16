import React from "react";
import "./Navbar.css";
import logo from "./ck-removebg-preview.png";
function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} />
          </div>
        </div>
        <div className="container side">
          <div className="search-field">
            <input type="search" placeholder="Search here" />
          </div>
        </div>
        <div className="container">
          <div className="hamburger">hamburger logo</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
