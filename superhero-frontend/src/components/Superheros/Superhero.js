import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip'
import { SuperheroFront } from './SuperheroFront'
import { SuperheroBack } from './SuperheroBack'

class Superhero extends Component {
    constructor(props) {
		super(props);
		this.state = {
			isFlipped: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

    render() {
        return(
				<div className="cards" key={this.props.hero.id}>
					<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <SuperheroFront hero={this.props.hero} index={this.props.hero.id} handleClick={this.handleClick} />
                        <SuperheroBack hero={this.props.hero} index={this.props.hero.id} handleClick={this.handleClick} />
					</ReactCardFlip>
				</div>
        )
    }
}

export default Superhero;