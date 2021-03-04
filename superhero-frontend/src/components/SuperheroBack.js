import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SuperheroBack = props =>
    <Card key={props.index} style={{ width: '16rem', height: '36rem' }}>
        <Card.Body style={{ flex: 1, flexDirection: 'column' }}>
        <Card.Title style={{ justifyContent: 'center' }}>{props.hero.fullName}</Card.Title>
        <Card.Text style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between' }}>
            <h6 className="attributes" id="race">Race: {props.hero.race}</h6>
            <h6 className="attributes" id="gender">Gender: {props.hero.gender}</h6>
            <h6 className="attributes" id="height">Height: {props.hero.height}</h6>
            <h6 className="attributes" id="weight">Weight: {props.hero.weight}</h6>
            <h6 className="attributes" id="occupation">Occupation: {props.hero.occupation}</h6>
            <h6 className="attributes" id="groups">Groups: {props.hero.groups}</h6>
            <h6 className="attributes" id="universe">Universe: {props.hero.universe}</h6>
        </Card.Text>
            <Button variant="outline-success" key={props.index} onClick={props.handleClick}>Attributes</Button>{' '}
        </Card.Body>
    </Card>

export { SuperheroBack }