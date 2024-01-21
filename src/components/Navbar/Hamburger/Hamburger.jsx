import React, { useState } from "react";
import "./Hamburger.css";
import HamIcon from "./images/hamburger-menu.svg";

function Hamburger() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`off-screen-menu ${open ? "open" : ""}`}>
      {/* Hamburger icon, visible below 768px */}
      <img
        src={HamIcon}
        alt="Ham"
        onClick={toggleMenu}
        className="hamburger-icon"
      />

      {/* Navigation links, visible above 768px */}
      <ul className={`nav-links ${open ? "hidden" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default Hamburger;
