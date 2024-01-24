import React from "react";
import "./Services.css";
import ios from "./iOS-deve-white.png";

function Services() {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <span className="head-col">Our Specialization</span>
          <p>
            Custom IT services and solutions built specifically for your
            business
          </p>
        </div>
        <div className="service-content">
          <div className="col-md-6">
            <img src={ios} alt="ios" />

            <img src={ios} alt="ios" />
          </div>
          <div className="col-md-6">
            <img src={ios} alt="ios" />
          
            <img src={ios} alt="ios" />
          </div>
          <div className="col-md-6">
            <img src={ios} alt="ios" />
         
            <img src={ios} alt="ios" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
