import React, { Component } from 'react';
import CurrentPeople from './CurrentPeople';


class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      selectedPerson: null
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => this.setState({ people: data.results }));
  }

  render() {
    const { people, selectedPerson } = this.state;

    return (
      <div>
        <h2>People</h2>
        <ul>
          {people.map(person => (
            <li key={person.url} onClick={() => this.setState({ selectedPerson: person })}>
              {person.name}
            </li>
          ))}
        </ul>
        {selectedPerson && <CurrentPeople person={selectedPerson} />}
      </div>
    );
  }
}


export default People;
