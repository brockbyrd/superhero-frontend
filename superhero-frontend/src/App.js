import React, { Component } from 'react';
import './App.css'
import { fetchCharacters } from './actions/characterActions'
import { connect } from 'react-redux'
import Homepage from './components/Homepage'
import SuperheroContainer from './containers/SuperheroContainer'
import VillainContainer from './containers/VillainContainer'
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

  render() {
    return(
      <div>
        <Route exact path='/' render={() => ( <Homepage /> )} />
        <Route path='/superheroes' render={() => ( <SuperheroContainer heroes={this.props.heroes} />)} />
        <Route path='/villains' render={() => ( <VillainContainer villains={this.props.villains} />)}/>
        <Route path='/create' render={() => ( <CharacterInput />)} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    loading: state.loading,
    heroes: state.characters.filter((char) =>
    char.alignment === 'good'),
    villains: state.characters.filter((char) =>
    char.alignment === 'bad')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);