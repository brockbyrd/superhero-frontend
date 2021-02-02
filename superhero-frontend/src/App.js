import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/characters')
    .then(response => response.json())
    .then(data => this.setState({ characters: data }))
    }

  render() {
    return(
      <div>
        {this.state.characters.map((char) => <h4 key={char.id}>{char.name}</h4> )}
      </div>
    )
  }
}