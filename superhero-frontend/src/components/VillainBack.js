import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const VillainBack = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Body>
        <Card.Title>{props.villain.fullName}</Card.Title>
        <Card.Text>
            <p className="attributes" id="race">Race: {props.villain.race}</p>
            <p className="attributes" id="gender">Gender: {props.villain.gender}</p>
            <p className="attributes" id="height">Height: {props.villain.height}</p>
            <p className="attributes" id="weight">Weight: {props.villain.weight}</p>
            <p className="attributes" id="groups">Groups: {props.villain.groups}</p>
            <p className="attributes" id="universe">Universe: {props.villain.universe}</p>
        </Card.Text>
            <Button key={props.index} onClick={props.handleClick} variant="outline-danger">Attributes</Button>{' '}
        </Card.Body>
    </Card>

export { VillainBack }