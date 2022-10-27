import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    const { id } = this.props;
    return id !== nextProps.id;
  }

  handleClick = () => {
    const { id, setGifFunction } = this.props;

    setGifFunction(id);
  };

  computeSrc() {
    const { id } = this.props;
    return `https://media.giphy.com/media/${id}/giphy.gif`;
  }

  render() {
    return (
      <input type="image" onClick={this.handleClick} src={this.computeSrc()} alt="" className="gif" />
    );
  }
}

export default Gif;
