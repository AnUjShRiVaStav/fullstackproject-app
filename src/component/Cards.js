import Card from 'react-bootstrap/Card'
import { BiEdit } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti'



export default function Cards() {
    return (
        <Card border="primary" style={{ width: '18rem', marginTop: '100px' }}>
            <Card.Header>Information</Card.Header>
            <Card.Body>
                <Card.Title>Subject</Card.Title>
                <div style={{ display: 'flex' }}>
                    <Card.Title>Subject:</Card.Title>
                    <Card.Text>Maths</Card.Text>
                    <BiEdit size='25px' />
                    <TiDeleteOutline size='25px' />
                </div>

                <div style={{ display: 'flex' }}>
                    <Card.Title>Topic: </Card.Title>
                    <Card.Text>Integration</Card.Text>
                    <BiEdit size='25px' />
                    <TiDeleteOutline size='25px' />

                </div>

                <div style={{ display: 'flex' }}>
                    <Card.Title>Notes:</Card.Title>
                    <Card.Text>Properties of Indefinite Integral
                        (i) ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx
                        (ii) For any real number k, ∫k f(x) dx = k∫f(x)dx.
                        <BiEdit size='25px' />
                        <TiDeleteOutline size='25px' />
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}