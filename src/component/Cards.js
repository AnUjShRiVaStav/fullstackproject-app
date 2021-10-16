import Card from 'react-bootstrap/Card'
import { BiEdit } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti'
import './card.css';


export default function Cards(props) {
    return (
        <Card border="primary" className="card_">
            <Card.Header>Information</Card.Header>
            <Card.Body>
                <Card.Title>{props.subject.toLocaleUpperCase()}</Card.Title>
                <div style={{ display: 'flex' }}>
                    <Card.Title>Subject:</Card.Title>
                    <Card.Text>{props.subject}</Card.Text>
                    <BiEdit size='25px' />
                    <TiDeleteOutline size='25px' onClick={() => {
                        props.onSelect(props.id)
                    }} />
                </div>

                <div style={{ display: 'flex' }}>
                    <Card.Title>Topic: </Card.Title>
                    <Card.Text>{props.topic}</Card.Text>
                    <BiEdit size='25px' />
                    <TiDeleteOutline size='25px' />

                </div>

                <div style={{ display: 'flex' }}>
                    <Card.Title>Notes:</Card.Title>
                    <Card.Text>{props.notes}

                        <BiEdit size='25px' />
                        <TiDeleteOutline size='25px' />
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}