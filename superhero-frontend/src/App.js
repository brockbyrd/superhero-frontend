import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

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
      <SplitPane split="vertical" minSize={50} defaultSize={100}>
        <div>Good Guys</div>
        <div>Bad Guys</div>
      </SplitPane>
    )
  }
}

export default App;