import React, { Component } from 'react';

function StatelessHello({ name }) {
  return (
    <h1 className="padded">
      Hello,
      {' '}
      {name}
    </h1>
  );
}

class StatefulHello extends Component {
  constructor(props) { // be promoted into a class
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    }; // defines initial state
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <h1
        className={`${this.state.clicked ? "clicked" : ""} padded`}
        onClick={this.handleClick}
      >
        Hello,
        {' '}
        {this.props.name}
        {' '}
        {this.state.counter}
      </h1>
    );
  }
}

export { StatelessHello, StatefulHello };
