import React, { Component } from 'react';
import BootstrapNavbar from '../Navbar'
import Villain from './Villain'

class VillainContainer extends Component {
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
			<>
			<BootstrapNavbar />
			<div className="flex-container">
				{this.props.villains.slice(0, this.state.visible).map((villain) => <Villain villain={villain} />)}
				<button type="button" onClick={this.loadMore} className="load-more">Load More</button>
            </div>
			</>
		)
	}
}
export default VillainContainer;