import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SuperheroBack = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Body>
        <Card.Title>{props.hero.fullName}</Card.Title>
        <Card.Text>
            <p>Race: {props.hero.race}</p>
            <p>Gender: {props.hero.gender}</p>
            <p>Height: {props.hero.height}</p>
            <p>Weight: {props.hero.weight}</p>
            <p>Occupation: {props.hero.occupation}</p>
            <p>Groups: {props.hero.groups}</p>
            <p>Universe: {props.hero.universe}</p>
            <Button variant="outline-success" key={props.index} onClick={props.handleClick}>Attributes</Button>{' '}
        </Card.Text>
        </Card.Body>
    </Card>

export { SuperheroBack }