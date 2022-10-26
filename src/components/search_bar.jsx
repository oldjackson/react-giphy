import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { highlighted: false };
  }

  handleInput = (event) => {
    const { searchFunction } = this.props;

    searchFunction(event.target.value);
  };

  handleMouseOver = () => {
    this.setState({ highlighted: true });
  };

  handleMouseLeave = () => {
    this.setState({ highlighted: false });
  };

  render() {
    const { highlighted } = this.state;
    return (
      <div className={highlighted ? "highlighted" : ""}>

        <input
          type="text"
          className="form-search form-control"
          onChange={this.handleInput}
          onMouseOver={this.handleMouseOver}
          onFocus={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
      </div>
    );
  }
}

export default SearchBar;
