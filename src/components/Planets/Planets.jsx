import React, { Component } from 'react';
import CurrentPlanet from './CurrentPlanet';

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      selectedPlanet: null
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => this.setState({ planets: data.results }));
  }

  render() {
    const { planets, selectedPlanet } = this.state;

    return (
      <div>
        <h2>Planets</h2>
        <ul>
          {planets.map(planets => (
            <li key={planets.url} onClick={() => this.setState({ selectedPlanet: planets })}>
              {planets.name}
            </li>
          ))}
        </ul>
        {selectedPlanet && <CurrentPlanet planets={selectedPlanet} />}
      </div>
    );
  }
}


export default Planets;