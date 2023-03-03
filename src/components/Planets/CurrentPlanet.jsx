import React, { Component } from 'react'

class CurrentPlanet extends Component {
    render() {
      const { planets } = this.props;
  
      return (
        <div className='current_item'>
          <h3>{planets.name}</h3>
          <p>Population: {planets.population}</p>
          <p>Rotation period: {planets.rotation_period}</p>
          <p>Hdiameter: {planets.diameter}</p>
        </div>
      );
    }
  }

  export default CurrentPlanet;