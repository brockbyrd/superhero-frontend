import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SuperheroBack = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Body>
        <Card.Title>{props.hero.fullName}</Card.Title>
        <Card.Text>
            <p className="attributes" id="race">Race: {props.hero.race}</p>
            <p className="attributes" id="gender">Gender: {props.hero.gender}</p>
            <p className="attributes" id="height">Height: {props.hero.height}</p>
            <p className="attributes" id="weight">Weight: {props.hero.weight}</p>
            <p className="attributes" id="occupation">Occupation: {props.hero.occupation}</p>
            <p className="attributes" id="groups">Groups: {props.hero.groups}</p>
            <p className="attributes" id="universe">Universe: {props.hero.universe}</p>
            <Button variant="outline-success" key={props.index} onClick={props.handleClick}>Attributes</Button>{' '}
        </Card.Text>
        </Card.Body>
    </Card>

export { SuperheroBack }