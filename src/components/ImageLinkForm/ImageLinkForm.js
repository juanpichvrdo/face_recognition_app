import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <h1 className="f3 tc white">
        This app will detect faces in your pictures. Give it a try!
      </h1>
      <div className="form">
        <input
          type="text"
          onChange={onInputChange}
          placeholder="Enter a URL for a picture with a face"
        />
        <button className="btn" onClick={onPictureSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
