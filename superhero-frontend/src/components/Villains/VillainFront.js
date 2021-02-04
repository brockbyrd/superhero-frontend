import Card from 'react-bootstrap/Card';

const VillainFront = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Img variant="top" src={props.villain.image1} />
        <Card.Body>
        <Card.Title>{props.villain.name}</Card.Title>
        <Card.Text>
            <ul>
                <li>Intelligence: {props.villain.intelligence}</li>
                <li>Strength: {props.villain.strength}</li>
                <li>Speed: {props.villain.speed}</li>
                <li>Durability: {props.villain.durability}</li>
                <li>Combat: {props.villain.combat}</li>
            </ul>
            <button key={props.index} onClick={props.handleClick}>Click to flip</button>
        </Card.Text>
        </Card.Body>
    </Card>

export { VillainFront }