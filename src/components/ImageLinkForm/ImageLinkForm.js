import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="f3 tc white">
        This app will detect faces in your pictures. Give it a try!
      </p>
      <p className="f3 tc white" style={{ fontSize: "15px" }}>
        Enter a link for a picture with a face below
      </p>
      <div className="form">
        <input type="text" onChange={onInputChange} />
        <button className="btn" onClick={onPictureSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
