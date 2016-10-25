import React, { Component, PropTypes } from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {secondsLeft: props.initialCount}
  }

  render() {
    let secondsLeft = this.state.secondsLeft;
    return(<p>{secondsLeft === 0 ? 'Boom!' : `${secondsLeft} seconds left before I go boom!`}</p>)
  }
}

module.exports = Bomb