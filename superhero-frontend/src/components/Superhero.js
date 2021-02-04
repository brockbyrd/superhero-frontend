import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip'

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

	render(){
		return(
            <div className="flex-container">
				{this.props.heroes.map((hero, index) =>
				<div className="cards">
					<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
						<Card key={index} style={{ width: '14rem' }}>
							<Card.Img variant="top" src={hero.image1} />
							<Card.Body>
							<Card.Title>{hero.name}</Card.Title>
							<Card.Text>
								<ul>
									<li>Intelligence: {hero.intelligence}</li>
									<li>Strength: {hero.strength}</li>
									<li>Speed: {hero.speed}</li>
									<li>Durability: {hero.durability}</li>
									<li>Combat: {hero.combat}</li>
								</ul>
								<button key={index} onClick={this.handleClick}>Click to flip</button>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card key={index} style={{ width: '14rem' }}>
						<Card.Body>
						<Card.Title>{hero.fullName}</Card.Title>
						<Card.Text>
							<p>Race: {hero.race}</p>
							<p>Gender: {hero.gender}</p>
							<p>Height: {hero.height}</p>
							<p>Weight: {hero.weight}</p>
							<p>Occupation: {hero.occupation}</p>
							<p>Groups: {hero.groups}</p>
							<p>Universe: {hero.universe}</p>
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

export default Superhero;