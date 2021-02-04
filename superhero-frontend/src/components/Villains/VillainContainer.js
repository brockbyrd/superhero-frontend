import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { VillainFront } from './VillainFront'
import { VillainBack } from './VillainBack'

class Villain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false,
			visible: 15,
			error: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.loadMore = this.loadMore.bind(this);
	}

	loadMore = () => {
		this.setState((prevState) => {
			return {visible: prevState.visible + 15}
		})
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

	render(){
		return(
			<div className="flex-container">
				{this.props.villains.slice(0, this.state.visible).map((villain, index) =>
				<div className="cards">
					<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
						<VillainFront villain={villain} index={index} handleClick={this.handleClick} />
						<VillainBack villain={villain} index={index} handleClick={this.handleClick} />
				</ReactCardFlip>
				</div>
				)}
				<button type="button" onClick={this.loadMore} className="load-more">Load More</button>
            </div>
		)
	}
}
export default Villain;