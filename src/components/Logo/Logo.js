import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import circuit from "./circuit.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            src={circuit}
            alt="Logo"
            style={{ height: "120px", padding: "1rem" }}
          />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
