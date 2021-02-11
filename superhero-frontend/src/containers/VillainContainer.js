import React, { Component } from 'react';
import BootstrapNavbar from '../components/Navbar'
import Villain from '../components/Villain'
import '../Characters.css'

class VillainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: 15,
			error: false
		}
		this.loadMore = this.loadMore.bind(this);
	}

	loadMore = () => {
		this.setState((prevState) => {
			return {visible: prevState.visible + 15}
		})
	}

	render(){
		return(
			<>
			<BootstrapNavbar />
			<div className="flex-container villains">
				{this.props.villains.slice(0, this.state.visible).map((villain) => <Villain villain={villain} />)}
				<button type="button" onClick={this.loadMore} className="load-more">Load More</button>
            </div>
			</>
		)
	}
}
export default VillainContainer;