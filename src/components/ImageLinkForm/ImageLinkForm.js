import React from "react";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 tc white">
        {"This app will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="center">
        <div className="center pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-blue">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
