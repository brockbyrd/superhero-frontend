import React, { Component } from 'react';
import './App.css'
import { fetchCharacters } from './actions/characterActions'
import { connect } from 'react-redux'
import Homepage from './components/Homepage'
import Superhero from './components/Superhero'
import Villain from './components/Villain'

class App extends Component {

  componentDidMount() {
    this.props.fetchCharacters();
    console.log(this.props.characters)
  }

    filterGood = () => {
      let heroes = this.props.characters
      heroes = heroes.filter((char) =>
        char.alignment === 'good'
      )
      console.log(heroes)
    }

    filterEvil = () => {
      let villains = this.props.characters
      villains = villains.filter((char) =>
      char.alignment === 'bad'
      )
      console.log(villains)
    }

  render() {
    return(
      <Homepage characters={this.props.characters} filterEvil={this.filterEvil} filterGood={this.filterGood} />,
      <Superhero />,
      <Villain />
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);