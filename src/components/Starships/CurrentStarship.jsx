import React, { Component } from 'react'

class CurrentStarship extends Component {
    render() {
      const { starships } = this.props;
  
      return (
        <div className='current_item'>
          <h3>{starships.name}</h3>
          <p>Manufacturer: {starships.manufacturer}</p>
          <p>Starship class: {starships.starship_class}</p>
          <p>Consumables: {starships.consumables}</p>
        </div>
      );
    }
  }

  export default CurrentStarship;