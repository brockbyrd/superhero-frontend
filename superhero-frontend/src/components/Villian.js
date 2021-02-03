import React, { Component } from 'react';

class Villain extends Component {

	render(){
		console.log(this.props.characters)
		return(
            <h1>Hello we are the bad guys</h1>
		)
	}
}
export default Villain;