import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      heroes: [],
      villains: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/characters')
    .then(response => response.json())
    .then(data => this.setState({ characters: data }))
    }

    filterGood = () => {
      let heroes = this.state.characters
      heroes = heroes.filter((char) =>
        char.alignment === 'good'
      )
      console.log(heroes)
    }

    filterEvil = () => {
      let villains = this.state.characters
      villains = villains.filter((char) =>
      char.alignment === 'bad'
      )
      console.log(villains)
    }

  render() {
    return(
      <Homepage />
    )
  }
}


export default App;