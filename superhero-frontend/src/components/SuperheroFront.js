import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SuperheroFront = props =>
    <Card key={props.index} style={{ width: '16rem', height: '36rem' }}>
        <Card.Img variant="top" src={props.hero.image1} style={{ borderRadius: 15, padding: '.5rem', height: '20rem' }} />
        <Card.Body>
        <Card.Title>{props.hero.name}</Card.Title>
        <Card.Text>
                <p className="attributes" id="intelligence">Intelligence: {props.hero.intelligence}</p>
                <p className="attributes" id="strength">Strength: {props.hero.strength}</p>
                <p className="attributes" id="speed">Speed: {props.hero.speed}</p>
                <p className="attributes" id="durability">Durability: {props.hero.durability}</p>
                <p className="attributes" id="combat">Combat: {props.hero.combat}</p>
        </Card.Text>
            <Button variant="outline-success" key={props.index} onClick={props.handleClick}>More Info</Button>{' '}
        </Card.Body>
    </Card>


export { SuperheroFront }

