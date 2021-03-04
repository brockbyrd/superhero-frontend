import React, { Component } from 'react';
import BootstrapNavbar from '../components/Navbar'
import Superhero from '../components/Superhero'
import '../Characters.css'


class SuperheroContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: 15,
			error: false
		}
		this.loadMore = this.loadMore.bind(this);
	}

	loadMore = () => {
		this.setState((prev) => {
			return {visible: prev.visible + 15}
		})
	}

	render(){
		return(
			<>
				<BootstrapNavbar />
				<div className="flex-container superheroes">
					{this.props.heroes.slice(0, this.state.visible).map((hero) => <Superhero hero={hero} />)}
					<button type="button" onClick={this.loadMore} className="load-more">Load More</button>
				</div>
			</>
		)
	}
}

export default SuperheroContainer;