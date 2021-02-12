import React, { Component } from 'react';
import './App.css'
import { fetchCharacters } from './actions/characterActions'
import { connect } from 'react-redux'
import Homepage from './components/Homepage'
import Superhero from './containers/SuperheroContainer'
import Villain from './containers/VillainContainer'
import { Route } from 'react-router-dom'
import CharacterInput from './components/CharacterInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      villains: []
    }
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

    filterGood = () => {
      let heroes = this.props.characters
      heroes = heroes.filter((char) =>
        char.alignment === 'good'
      )
      this.setState({ heroes: heroes })
    }

    filterEvil = () => {
      let villains = this.props.characters
      villains = villains.filter((char) =>
      char.alignment === 'bad'
      )
      this.setState({ villains: villains })
    }

  render() {
    return(
      <div>
        <Route exact path='/' render={() => ( <Homepage characters={this.props.characters} filterEvil={this.filterEvil} filterGood={this.filterGood} />)} />
        <Route path='/superheroes' render={() => ( <Superhero heroes={this.state.heroes} />)} />
        <Route path='/villains' render={() => ( <Villain villains={this.state.villains} />)}/>
        <Route path='/create' render={() => ( <CharacterInput />)} />
      </div>
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