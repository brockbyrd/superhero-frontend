import React, { Component } from 'react';

class App extends Component {
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
      <div class="parent">

        <div class="item" style="background: url(https://www.comicbasics.com/wp-content/uploads/2020/08/The-Top-10-Greatest-Superheroes-Without-Superpowers-In-Comics-Today.jpg) center center no-repeat; background-size: cover;"></div>

        <div class="item" style="background: url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Meanest-Supervillains-Of-All-Time.jpg) center center no-repeat; background-size: cover;"></div>

      </div>
    )
  }
}


export default App;