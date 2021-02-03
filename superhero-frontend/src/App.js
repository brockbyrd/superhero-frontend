import React, { Component } from 'react';
import './App.css'
import { fetchCharacters } from './actions/characterActions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.props.fetchCharacters();
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
      <div className="parent">

        <div className="leftHalf" onClick={this.filterGood} style={{ backgroundImage: `url("https://www.comicbasics.com/wp-content/uploads/2020/08/The-Top-10-Greatest-Superheroes-Without-Superpowers-In-Comics-Today.jpg")`}}></div>

        <div className="rightHalf" onClick={this.filterEvil} style={{ backgroundImage: `url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Meanest-Supervillains-Of-All-Time.jpg")`}}></div>

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