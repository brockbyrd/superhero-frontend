import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const VillainFront = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Img variant="top" src={props.villain.image1} style={{ borderRadius: 15, padding: '.5rem' }} />
        <Card.Body>
        <Card.Title>{props.villain.name}</Card.Title>
        <Card.Text>
                <p>Intelligence: {props.villain.intelligence}</p>
                <p>Strength: {props.villain.strength}</p>
                <p>Speed: {props.villain.speed}</p>
                <p>Durability: {props.villain.durability}</p>
                <p>Combat: {props.villain.combat}</p>
            <Button key={props.index} onClick={props.handleClick} variant="outline-danger">More Info</Button>{' '}
        </Card.Text>
        </Card.Body>
    </Card>

export { VillainFront }