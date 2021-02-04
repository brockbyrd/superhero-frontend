import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Superhero extends Component {

	render(){
		return(
            <div className="flex-container">
				{this.props.heroes.map((hero, index) =>
				<div className="cards">
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
						</Card.Text>
					</Card.Body>
				  </Card>
				</div>
				)}
            </div>
		)
	}
}

export default Superhero;