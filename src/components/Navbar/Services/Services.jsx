import React, { useState } from "react";
import "./Services.css";
import ios from "./iOS-deve.png";
import iosmini from "./iOS-deve-white.png"
import android from "./android-deve.png"

function Services() {
  const [hover, setHover] = useState(null);

  const handleHoverEffect = (link) => {
    setHover(link);
  };

  const handleHoverLeave = () => {
    setHover(null);
  };

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
          <div
            className="col-md-6"
            onMouseEnter={() => handleHoverEffect("iphone")}
            onMouseLeave={handleHoverLeave}
          >
            {hover === "iphone" ? (
              <div className="hoverContent">
              <img className="imgmini" src={iosmini} alt="iosmini" />
              <h6>Iphone App Development</h6>
              <p>
                We make use of modern programming languages like Swift and
                Objective-C to offer high-end iPhone app development services.
                With proven technologies and approaches, we have developed more
                than 150 iPhone apps of various categories.
              </p>
              </div>
            ) : (
              <div className="img-with-title">
                <img src={ios} alt="ios" />
                <h4 className="d-flex">iPhone App Development</h4>
              </div>
            )}
          </div>
          <div
            className="col-md-6"
            onMouseEnter={() => handleHoverEffect("android")}
            onMouseLeave={handleHoverLeave}
          >
            {hover === "android" ? (
              <div className="hoverContent">
              <img className="imgmini" src={android} alt="androidmini" />
              <h6>Android App Development</h6>
              <p>
                We have successfully developed 200+ Android apps of various categories, including on-demand, health & fitness and other top apps categories. Using Java and Kotlin, we build Android apps from scratch for Android devices to smartwatches and smart TVs.
              </p>
              </div>
            ) : (
              <div className="img-with-title">
                <img src={android} alt="android" />
                <h4 className="d-flex">Android App Development</h4>
              </div>
            )}
          </div>
        </div>

        
        <div className="service-content">
          <div
            className="col-md-6"
            onMouseEnter={() => handleHoverEffect("iphone")}
            onMouseLeave={handleHoverLeave}
          >
            {hover === "iphone" ? (
              <div className="hoverContent">
              <img className="imgmini" src={iosmini} alt="iosmini" />
              <h6>Iphone App Development</h6>
              <p>
                We make use of modern programming languages like Swift and
                Objective-C to offer high-end iPhone app development services.
                With proven technologies and approaches, we have developed more
                than 150 iPhone apps of various categories.
              </p>
              </div>
            ) : (
              <div className="img-with-title">
                <img src={ios} alt="ios" />
                <h4 className="d-flex">iPhone App Development</h4>
              </div>
            )}
          </div>
          <div
            className="col-md-6"
            onMouseEnter={() => handleHoverEffect("android")}
            onMouseLeave={handleHoverLeave}
          >
            {hover === "android" ? (
              <div className="hoverContent">
              <img className="imgmini" src={android} alt="androidmini" />
              <h6>Android App Development</h6>
              <p>
                We have successfully developed 200+ Android apps of various categories, including on-demand, health & fitness and other top apps categories. Using Java and Kotlin, we build Android apps from scratch for Android devices to smartwatches and smart TVs.
              </p>
              </div>
            ) : (
              <div className="img-with-title">
                <img src={android} alt="android" />
                <h4 className="d-flex">Android App Development</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
