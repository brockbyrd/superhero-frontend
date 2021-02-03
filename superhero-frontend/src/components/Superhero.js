import React, { Component } from 'react';

class Superhero extends Component {

	render(){
		console.log(this.props.characters)
		return(
            <h1>Hello we are the good guys</h1>
		)
	}
}
export default Superhero;