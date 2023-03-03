import React, { Component } from 'react'

class CurrentPeople extends Component {
    render() {
      const { person } = this.props;
  
      return (
        <div className='current_item'>
          <h3>{person.name}</h3>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Hair color: {person.hair_color}</p>
        </div>
      );
    }
  }

  export default CurrentPeople;