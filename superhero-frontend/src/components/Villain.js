import React, { Component } from 'react';

class Villain extends Component {

	render(){
		console.log(this.props.characters)
		return(
            <div>
                <h1>Hello we are the bad guys</h1>
            </div>

		)
	}
}
export default Villain;