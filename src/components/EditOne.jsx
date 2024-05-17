import React from 'react'
import Modal from '../modals/Modals'
import { Card ,Button,Form} from 'react-bootstrap'
import './AddNew.css'

const EditOne = (props) => {

    const closeEditHandler =() =>{
        props.onCloseEdit(false)
    }
    return (

        <Modal>
         <Card>
          <Card.Body className='card_body'>
            <Card.Title className='text-center add_heading'>Edit Record</Card.Title>
            <Button className='cross_button' onClick={closeEditHandler} >X</Button>
    
            <Form>
            <Form.Group className="mb-3" >
              <Form.Label className='add'>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" className='add_input' />
            </Form.Group> 
    
            <Form.Group className="mb-3" >
              <Form.Label className='add'>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter Subject" className='add_input' />
            </Form.Group> 
    
            <Form.Group className="mb-3" >
              <Form.Label className='add'>Marks</Form.Label>
              <Form.Control type="number" placeholder="Enter Marks" className='add_input'/>
            </Form.Group> 
            <Button className='form_button add_button' style={{width:'100%'}}>Submit</Button>
            </Form>
    
    
          </Card.Body>
        </Card>
        </Modal>
      )
}

export default EditOne
