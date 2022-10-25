import React, { Component } from 'react';

class SearchBar extends Component {
  handleInput = (event) => {
    const { searchFunction } = this.props;

    searchFunction(event.target.value);
  };

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleInput} />
    );
  }
}

export default SearchBar;
