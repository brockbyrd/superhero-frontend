import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip'
import { VillainFront } from './VillainFront'
import { VillainBack } from './VillainBack'

class Villain extends Component {
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
			<div className="cards" key={this.props.villain.id}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <VillainFront villain={this.props.villain} index={this.props.villain.id} handleClick={this.handleClick} />
                    <VillainBack villain={this.props.villain} index={this.props.villain.id} handleClick={this.handleClick} />
                </ReactCardFlip>
            </div>
        )
    }
}

export default Villain;




