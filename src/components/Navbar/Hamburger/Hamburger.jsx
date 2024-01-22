import React, { useState } from "react";
import "./Hamburger.css";
import HamIcon from "./images/hamburger-menu.svg";
import CrossIcon from "./images/cross.png";

function Hamburger() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={`off-screen-menu ${open ? "open" : ""}`}>
      <img
        src={HamIcon}
        alt="Ham"
        onClick={toggleMenu}
        className="icon hamburger-icon"
      />

      <ul className={`nav-links ${open ? "hidden" : ""}`}>
      {open && (
        <img
          src={CrossIcon}
          alt="Close"
          onClick={closeMenu}
          className="close-icon"
        />
      )}
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default Hamburger;
