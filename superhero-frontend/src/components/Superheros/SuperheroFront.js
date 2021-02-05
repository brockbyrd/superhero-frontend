import Card from 'react-bootstrap/Card';

const SuperheroFront = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Img variant="top" src={props.hero.image1} />
        <Card.Body>
        <Card.Title>{props.hero.name}</Card.Title>
        <Card.Text>
            <ul>
                <li>Intelligence: {props.hero.intelligence}</li>
                <li>Strength: {props.hero.strength}</li>
                <li>Speed: {props.hero.speed}</li>
                <li>Durability: {props.hero.durability}</li>
                <li>Combat: {props.hero.combat}</li>
            </ul>
            <button key={props.index} onClick={props.handleClick}>Click to flip</button>
        </Card.Text>
        </Card.Body>
    </Card>


export { SuperheroFront }

