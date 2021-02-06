import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SuperheroFront = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Img variant="top" src={props.hero.image1} style={{ borderRadius: 15, padding: '.5rem' }} />
        <Card.Body>
        <Card.Title>{props.hero.name}</Card.Title>
        <Card.Text>
                <p>Intelligence: {props.hero.intelligence}</p>
                <p>Strength: {props.hero.strength}</p>
                <p>Speed: {props.hero.speed}</p>
                <p>Durability: {props.hero.durability}</p>
                <p>Combat: {props.hero.combat}</p>
            <Button variant="outline-success" key={props.index} onClick={props.handleClick}>More Info</Button>{' '}
        </Card.Text>
        </Card.Body>
    </Card>


export { SuperheroFront }

