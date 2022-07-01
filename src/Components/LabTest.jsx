import React from "react";
import "./labtest.css";
import IMG1 from "../img/img2.png";
const Warish = () => {

  return (
    <div>
      {/* <img src={IMG1} alt="" /> */}
      <div id="slideshow">
        {/* <!--Show Slideshow here--> */}
        <div className="slide">
          <img src={IMG1} alt="" />
        </div>
        <div className="slide">
          <img src={IMG1} alt="" />
        </div>
        <div className="slide">
          <img src={IMG1} alt="" />
        </div>
        <div className="slide">
          <img src={IMG1} alt="" />
        </div>
        {/* <span className="arrow prev" onclick="slider(-1)">&#10094;</span>
    <span className="arrow next" onclick="slider(1)">&#10095;</span> */}
      </div>
    </div>
  );
};

export default Warish;
