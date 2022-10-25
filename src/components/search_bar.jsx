import React, { Component } from 'react';

class SearchBar extends Component {
  dummy() {
    console.log(this);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onFocus={this.dummy()} />
    );
  }
}

export default SearchBar;
