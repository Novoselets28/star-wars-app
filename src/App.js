import React, { Component } from 'react'
import People from './components/People/People'
import Planets from './components/Planets/Planets'
import Starships from './components/Starships/Starships'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <People/>
        <Planets/>
        <Starships/>
      </div>
    )
  }
}

