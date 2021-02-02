import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:3000/sports')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  render() {
    return(
      <div>
      </div>
    )
  }
}