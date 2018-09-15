import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="Face to detect" width="500" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
