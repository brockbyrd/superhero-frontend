import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const VillainBack = props =>
    <Card key={props.index} style={{ width: '14rem' }}>
        <Card.Body>
        <Card.Title>{props.villain.fullName}</Card.Title>
        <Card.Text>
            <p>Race: {props.villain.race}</p>
            <p>Gender: {props.villain.gender}</p>
            <p>Height: {props.villain.height}</p>
            <p>Weight: {props.villain.weight}</p>
            <p>Occupation: {props.villain.occupation}</p>
            <p>Groups: {props.villain.groups}</p>
            <p>Universe: {props.villain.universe}</p>
            <Button key={props.index} onClick={props.handleClick} variant="outline-danger">Attributes</Button>{' '}
        </Card.Text>
        </Card.Body>
    </Card>

export { VillainBack }