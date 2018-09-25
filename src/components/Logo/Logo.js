import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2" options={{ max: 50 }}>
        <div className="Tilt-inner">
          <img src={brain} alt="Logo" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
