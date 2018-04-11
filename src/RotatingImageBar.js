import React, { Component } from 'react';
import weddingImage from './images/hugging_with_sheep.jpg';
import soloJohn from './images/john_solo.jpg';
import soloGudrun from './images/gudrun_solo.jpg'

class RotatingImageBar extends Component {
  render() {
    const images = [soloJohn, weddingImage, soloGudrun];
    const weddingImages = images.map((image) =>
      <img src={image} className="App-logo" alt="logo" />
    );
    return (
      <div className="Roating-image-bar">
        {weddingImages}
      </div>
    );
  }
}

export default RotatingImageBar;
