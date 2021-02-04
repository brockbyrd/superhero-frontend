import React, { Component } from 'react';

class Villain extends Component {

	render(){
		return(
            <div>
                {this.props.villains.map((villain) => villain.name)}
            </div>
		)
	}
}
export default Villain;