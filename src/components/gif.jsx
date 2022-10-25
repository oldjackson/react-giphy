import React, { Component } from 'react';

class Gif extends Component {
  computeSrc() {
    const { id } = this.props;
    return `https://media.giphy.com/media/${id}/giphy.gif`;
  }

  render() {
    return (
      <img src={this.computeSrc()} alt="" className="gif" />
    );
  }
}

export default Gif;
