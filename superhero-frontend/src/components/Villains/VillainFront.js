import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const VillainFront = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Img variant="top" src={props.villain.image1} style={{ borderRadius: 15, padding: '.5rem' }} />
        <Card.Body>
        <Card.Title>{props.villain.name}</Card.Title>
        <Card.Text>
                <p className="attributes" id="intelligence">Intelligence: {props.villain.intelligence}</p>
                <p className="attributes" id="strength">Strength: {props.villain.strength}</p>
                <p className="attributes" id="speed">Speed: {props.villain.speed}</p>
                <p className="attributes" id="durability">Durability: {props.villain.durability}</p>
                <p className="attributes" id="combat">Combat: {props.villain.combat}</p>
            <Button key={props.index} onClick={props.handleClick} variant="outline-danger">More Info</Button>{' '}
        </Card.Text>
        </Card.Body>
    </Card>

export { VillainFront }