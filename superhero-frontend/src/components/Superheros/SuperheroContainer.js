import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip'
import { SuperheroFront } from './SuperheroFront'
import { SuperheroBack } from './SuperheroBack'
import BootstrapNavbar from '../Navbar'

class Superhero extends Component {
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
		this.setState((prev) => {
			return {visible: prev.visible + 15}
		})
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

	render(){
		return(
			<>
			<BootstrapNavbar />
            <div className="flex-container">
				{this.props.heroes.slice(0, this.state.visible).map((hero, index) =>
				<div className="cards">
					<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
						<SuperheroFront hero={hero} index={index} handleClick={this.handleClick} />
						<SuperheroBack hero={hero} index={index} handleClick={this.handleClick} />
					</ReactCardFlip>
				</div>
				)}
				<button type="button" onClick={this.loadMore} className="load-more">Load More</button>
            </div>
			</>
		)
	}
}

export default Superhero;