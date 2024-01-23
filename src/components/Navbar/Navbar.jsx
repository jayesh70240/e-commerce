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
            <div className="logo-text">
              {/* <span className="c">Cherie</span><br/><span className="and">&</span><span className="k">Kittu</span> */}
            </div>
          </div>
        </div>
      <Hamburger/>
      </nav>
    </>
  );
}

export default Navbar;
