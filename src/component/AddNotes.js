import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import { BiEdit } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti'
import { MdOutlineAddCircle } from 'react-icons/md'
import Cards from './Cards'

export default function AddNotes() {

    const [data, setData] = useState({
        subject: '',
        topic: '',
        notes: ''
    })


    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(value);
        console.log(name);
        setData((oldData) => {
            return {
                ...oldData,
                [name]: value,
            }
        })
    }

    const [newData, setNewData] = useState([]);
    const AddInput = () => {
        setNewData((oldData) => {
            console.log(`data`, oldData, newData)
            return [...oldData, data]
        })

    }


    const Delete = (id) => {
        setNewData((oldData) => {
            return oldData.filter((arr, index) => {
                return index != id
            })
        })
    }


    return (
        <div>
            <Card className="text-center" style={{ marginTop: '20px' }}>
                <Card.Header>Add Notes</Card.Header>
                <Card.Body>

                    <div>
                        <Card.Text style={{ display: 'inline' }}>Add Subject: </Card.Text>
                        <input
                            placeholder='Add subject...'
                            onChange={handleInput}
                            name='subject'
                            autoComplete='off'
                        />
                        <MdOutlineAddCircle onClick={AddInput} size='25px' />
                        <BiEdit size='25px' />
                        <TiDeleteOutline size='25px' />

                    </div>


                    <div style={{ marginTop: '10px' }}>
                        <Card.Text style={{ display: 'inline' }}>Add Topic: </Card.Text>
                        <input placeholder='Add topic...' onChange={handleInput} name='topic' />
                        <MdOutlineAddCircle size='25px' />
                        <BiEdit size='25px' />
                        <TiDeleteOutline size='25px' />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <Card.Text style={{ display: 'inline' }}>Add Notes: </Card.Text>
                        <input placeholder='Add notes...' onChange={handleInput} name='notes' />
                        <MdOutlineAddCircle size='25px' />
                        <BiEdit size='25px' />
                        <TiDeleteOutline size='25px' />
                    </div>
                </Card.Body>
            </Card>






            {newData.map((value, index) => {
                return (
                    <Cards
                        subject={value.subject}
                        topic={value.topic}
                        notes={value.notes}
                        key={index}
                        id={index}
                        onSelect={Delete}

                    />
                )
            })}

        </div>
    )
}
