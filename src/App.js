import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "4532bb02dbc6421ba6e65f2fc6a5476c"
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true
      }
    }
  }
};

class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    box: {},
    showImage: false
  };

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    console.log(box);
    this.setState({ box });
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    this.setState({ showImage: true });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  render() {
    const { imageUrl, box, showImage } = this.state;
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />

        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onPictureSubmit={this.onPictureSubmit}
        />
        {showImage && <FaceRecognition box={box} imageUrl={imageUrl} />}
      </div>
    );
  }
}

export default App;
