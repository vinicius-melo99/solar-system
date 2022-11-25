import React, { Component } from 'react';
import Proptypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="planetCard" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: Proptypes.string,
  planetImage: Proptypes.string,
};

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

export default PlanetCard;
