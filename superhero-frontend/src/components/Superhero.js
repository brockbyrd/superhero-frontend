import React, { Component } from 'react';

class Superhero extends Component {

	render(){
		return(
            <div>
                {this.props.heroes.map((hero) => hero.name)}
            </div>
		)
	}
}

export default Superhero;