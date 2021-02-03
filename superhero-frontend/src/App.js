import React, { Component } from 'react';
import './App.css'
import { fetchCharacters } from './actions/characterActions'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     characters: []
  //   }
  // }

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
      <div className="parent">
        <Route render={({ history }) => (
          <div className="leftHalf" onClick={() => history.push('/superheroes')}><img src="https://www.wallpapertip.com/wmimgs/35-357728_all-superheroes-wallpaper.jpg" alt="" onClick={this.filterGood} /></div>
        )
      } />
        <Route render={({ history }) => (
          <div className="rightHalf" onClick={() => history.push('/villains')} ><img src="https://wallpaperaccess.com/full/783564.jpg" alt="" onClick={this.filterEvil} /></div>
        )} />


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