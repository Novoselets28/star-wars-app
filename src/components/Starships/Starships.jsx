import React, { Component } from 'react';
import CurrentStarship from './CurrentStarship';

class Starships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
      selectedStarship: null
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => this.setState({ starships: data.results }));
  }

  render() {
    const { starships, selectedStarship} = this.state;

    return (
      <div>
        <h2>Starships</h2>
        <ul>
          {starships.map(starships => (
            <li key={starships.url} onClick={() => this.setState({ selectedStarship: starships })}>
              {starships.name}
            </li>
          ))}
        </ul>
        {selectedStarship && <CurrentStarship starships={selectedStarship} />}
      </div>
    );
  }
}


export default Starships;