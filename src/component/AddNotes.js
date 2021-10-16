import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

export default function AddNotes() {
    return (

        <Card className="text-center" style={{ marginTop: '20px' }}>
            <Card.Header>Information</Card.Header>
            <Card.Body>

                <div>
                    <Card.Text style={{ display: 'inline' }}>Add Subject: </Card.Text>
                    <input placeholder='Add subject...' />
                    <Button variant="info" >Edit</Button>
                    &nbsp;<Button variant="danger">Delete</Button>
                </div>


                <div style={{ marginTop: '10px' }}>
                    <Card.Text style={{ display: 'inline' }}>Add Topic: </Card.Text>
                    <input placeholder='Add topic...' />
                    <Button variant="info" >Edit</Button>
                    &nbsp;<Button variant="danger">Delete</Button>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Card.Text style={{ display: 'inline' }}>Add Notes: </Card.Text>
                    <input placeholder='Add notes...' />
                    <Button variant="info" >Edit</Button>
                    &nbsp; <Button variant="danger">Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}
