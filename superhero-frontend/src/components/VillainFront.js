import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const VillainFront = props =>
    <Card key={props.index} style={{ width: '16rem', height: '36rem' }}>
        <Card.Img variant="top" src={props.villain.image1} style={{ borderRadius: 15, padding: '.5rem', height: '20rem' }} />
        <Card.Body>
        <Card.Title>{props.villain.name}</Card.Title>
        <Card.Text style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around' }}>
                <p className="attributes" id="intelligence">Intelligence: {props.villain.intelligence}</p>
                <p className="attributes" id="strength">Strength: {props.villain.strength}</p>
                <p className="attributes" id="speed">Speed: {props.villain.speed}</p>
                <p className="attributes" id="durability">Durability: {props.villain.durability}</p>
                <p className="attributes" id="combat">Combat: {props.villain.combat}</p>
        </Card.Text>
            <Button key={props.index} onClick={props.handleClick} variant="outline-danger">More Info</Button>{' '}
        </Card.Body>
    </Card>

export { VillainFront }