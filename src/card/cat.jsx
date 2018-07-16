import React, { Component } from 'react';
import images from '../configs/images';
class Cat extends Component {
  render() {
    return (
      <div>
        <img src={images.cat} role="presentation" />
      </div>
    );
  }
}

export default Cat;