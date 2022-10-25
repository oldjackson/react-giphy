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
    const { clicked, counter } = this.state;

    this.setState({
      clicked: !clicked,
      counter: counter + 1
    });
  };

  render() {
    const { name } = this.props;
    const { clicked, counter } = this.state;

    return (
      <h1
        className={`${clicked ? "clicked" : ""} padded`}
        onClick={this.handleClick}
      >
        Hello,
        {' '}
        {name}
        {' '}
        {counter}
      </h1>
    );
  }
}

export { StatelessHello, StatefulHello };
