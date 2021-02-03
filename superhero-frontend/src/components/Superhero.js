import React, { Component } from 'react';

class Superhero extends Component {

	render(){
		console.log(this.props.characters)
		return(
            <div>
                <h1>Hello we are the good guys</h1>
            </div>

		)
	}
}
export default Superhero;