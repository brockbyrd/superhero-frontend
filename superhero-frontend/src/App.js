import React, { Component } from 'react';
import './App.css'
import { fetchCharacters } from './actions/characterActions'
import { connect } from 'react-redux'
import Homepage from './components/Homepage'

class App extends Component {

  componentDidMount() {
    this.props.fetchCharacters();
  }

    filterGood = () => {
      let heroes = this.props.characters
      heroes = heroes.filter((char) =>
        char.alignment === 'good'
      )
      this.setState({ characters: heroes })
    }

    filterEvil = () => {
      let villains = this.props.characters
      villains = villains.filter((char) =>
      char.alignment === 'bad'
      )
      this.setState({ characters: villains })
    }

  render() {
    return(
      <Homepage characters={this.props.characters} filterEvil={this.filterEvil} filterGood={this.filterGood} />
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