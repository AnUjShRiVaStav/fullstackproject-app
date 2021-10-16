import Card from 'react-bootstrap/Card'
import { BiEdit } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti'
import { MdOutlineAddCircle } from 'react-icons/md'

export default function AddNotes() {
    return (

        <Card className="text-center" style={{ marginTop: '20px' }}>
            <Card.Header>Add Notes</Card.Header>
            <Card.Body>

                <div>
                    <Card.Text style={{ display: 'inline' }}>Add Subject: </Card.Text>
                    <input placeholder='Add subject...' />
                    <MdOutlineAddCircle size='25px' />
                    <BiEdit size='25px' />
                    <TiDeleteOutline size='25px' />

                </div>


                <div style={{ marginTop: '10px' }}>
                    <Card.Text style={{ display: 'inline' }}>Add Topic: </Card.Text>
                    <input placeholder='Add topic...' />
                    <MdOutlineAddCircle size='25px' />
                    <BiEdit size='25px' />
                    <TiDeleteOutline size='25px' />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Card.Text style={{ display: 'inline' }}>Add Notes: </Card.Text>
                    <input placeholder='Add notes...' />
                    <MdOutlineAddCircle size='25px' />
                    <BiEdit size='25px' />
                    <TiDeleteOutline size='25px' />
                </div>
            </Card.Body>
        </Card>
    )
}
