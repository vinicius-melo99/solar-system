import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" />
      </>
    );
  }
}

export default SolarSystem;
