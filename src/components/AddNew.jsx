import React, { useContext,useState } from 'react'
import Modal from '../modals/Modals';
import { Card ,Button,Form} from 'react-bootstrap'
import './AddNew.css';
import studentContext from '../store/student-context'
import axios from 'axios'


const AddNew = (props) => {

  const [name,setName] = useState('');
  const [subject,setSubject] = useState('');
  const [marks,setMarks] = useState('');
  const [errorMessage,setErrorMessage] = useState('')

  const studentCtx = useContext(studentContext);
  console.log(studentCtx,'sfsf')

  //closing the add form
  const closeHandler = () =>{
      props.onCloseAdd(false);
  }

  const nameHandler = (e)=>{
   setName(e.target.value)
  }

  const subjectHandler = (e) =>{
   setSubject(e.target.value)
  }

  const marksHandler = (e) =>{
     setMarks(e.target.value)
  }

  const addnewHandler = async(e)=>{
    e.preventDefault();

    const data = {
      name:name,
      subject:subject,
      marks:marks
    }
  
    const token = localStorage.getItem('token')
    try {
      const res = await axios.post('http://localhost:8000/student/add',data,{headers:{Authorization:token}});
      if(res.status===201){
        studentCtx.addStudent(res.data.data)
        closeHandler();
      }
  
    } catch (error) {
      setErrorMessage(error.response.data.message)
    }
    setName('');
    setSubject('');
    setMarks('');
  }

  return (

    <Modal>
     <Card>
      <Card.Body className='card_body'>
        <Card.Title className='text-center add_heading'>Add New Records</Card.Title>
        <Button className='cross_button' onClick={closeHandler} >X</Button>

        <div className="error">{errorMessage}</div>
        <Form onSubmit={addnewHandler}>
        <Form.Group className="mb-3" >
          <Form.Label className='add'>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" className='add_input' value={name} onChange={nameHandler} />
        </Form.Group> 

        <Form.Group className="mb-3" >
          <Form.Label className='add'>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter Subject" className='add_input' value={subject} onChange={subjectHandler} />
        </Form.Group> 

        <Form.Group className="mb-3" >
          <Form.Label className='add'>Marks</Form.Label>
          <Form.Control type="number" placeholder="Enter Marks" className='add_input' value={marks} onChange={marksHandler}/>
        </Form.Group> 
        <Button className='form_button add_button' style={{width:'100%'}} type='submit'>Submit</Button>
        </Form>


      </Card.Body>
    </Card>
    </Modal>
  )
}

export default AddNew

