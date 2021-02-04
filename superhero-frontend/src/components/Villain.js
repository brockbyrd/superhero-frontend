import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip'

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

	render(){
		return(
			<div className="flex-container">
				{this.props.villains.map((villain, index) =>
				<div className="cards">
					<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
						<Card key={index} style={{ width: '14rem' }}>
							<Card.Img variant="top" src={villain.image1} />
							<Card.Body>
							<Card.Title>{villain.name}</Card.Title>
							<Card.Text>
								<ul>
									<li>Intelligence: {villain.intelligence}</li>
									<li>Strength: {villain.strength}</li>
									<li>Speed: {villain.speed}</li>
									<li>Durability: {villain.durability}</li>
									<li>Combat: {villain.combat}</li>
								</ul>
								<button key={index} onClick={this.handleClick}>Click to flip</button>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card key={index} style={{ width: '14rem' }}>
						<Card.Body>
						<Card.Title>{villain.fullName}</Card.Title>
						<Card.Text>
							<p>Race: {villain.race}</p>
							<p>Gender: {villain.gender}</p>
							<p>Height: {villain.height}</p>
							<p>Weight: {villain.weight}</p>
							<p>Occupation: {villain.occupation}</p>
							<p>Groups: {villain.groups}</p>
							<p>Universe: {villain.universe}</p>
							<button onClick={this.handleClick}>Click to flip</button>
						</Card.Text>
						</Card.Body>
					</Card>
				</ReactCardFlip>
				</div>
				)}
            </div>
		)
	}
}
export default Villain;