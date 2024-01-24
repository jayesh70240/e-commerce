import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import HamIcon from "./images/hamburger-menu.svg";
import CrossIcon from "./images/cross.png";

function Hamburger() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveLink(null);
  };

  const handleMouseEvents = (link) => {
    setActiveLink(link);
  };

  return (
    <>
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


          <li onMouseEnter={() => handleMouseEvents("services")} onMouseLeave={() => handleMouseEvents(null)}>
            <Link to="/services">Services</Link>
            {activeLink === "services" && (
              <ul className="sub-menu sleft">
                <li>IT Consult 1</li>
                <li>IT Consult 2</li>
                <li>IT Consult 3</li>
                <li>IT Consult 4</li>
                <li>IT Consult 5</li>
                <li>IT Consult 6</li>
              </ul>
            )}
          </li>
          
          <li onMouseEnter={() => handleMouseEvents("industries")} onMouseLeave={() => handleMouseEvents(null)}>
            <Link to="/industries">Industries</Link>
            {activeLink === "industries" && (
              <ul className="sub-menu ileft">
              </ul>
            )}
          </li>

          <li onMouseEnter={() => handleMouseEvents("insights")} onMouseLeave={() => handleMouseEvents(null)}>
            <Link to="/insights">Insights</Link>
            {activeLink === "insights" && (
              <ul className="sub-menu inleft">
              </ul>
            )}
          </li>

          <li onMouseEnter={() => handleMouseEvents("technology")} onMouseLeave={() => handleMouseEvents(null)}>
            <Link to="/technology">Technology</Link>
            {activeLink === "technology" && (
              <ul className="sub-menu tleft">
              </ul>
            )}
          </li>
          <li onMouseEnter={() => handleMouseEvents("careers")} onMouseLeave={() => handleMouseEvents(null)}>
            <Link to="/careers">Careers</Link>
            {activeLink === "careers" && (
              <ul className="sub-menu cleft">
              </ul>
            )}
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default Hamburger;