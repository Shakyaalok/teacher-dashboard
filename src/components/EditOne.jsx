import React,{useState,useEffect,useContext} from 'react'
import Modal from '../modals/Modals'
import { Card ,Button,Form} from 'react-bootstrap'
import './AddNew.css';
import StudentContext from '../store/student-context';
import axios from 'axios'

const EditOne = (props) => {

  const studentCtx = useContext(StudentContext)

  const [name,setName] = useState('');
  const [subject,setSubject] = useState('');
  const [marks,setMarks] = useState('');
  const [errorMessage,setErrorMessage] = useState('')



    const closeEditHandler =() =>{
        props.onCloseEdit(false)
    }


    useEffect(() => {
      if (props.data) {
        setName(props.data.name);
        setSubject(props.data.subject);
        setMarks(props.data.marks);
      }
    }, [props.data]);

    const updateMarksHandler =(e) =>{
      setMarks(e.target.value)
    }


    const submitEditHandler = async(e) =>{
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
          closeEditHandler();
        }
    
      } catch (error) {
        setErrorMessage(error.response.data.message)
      }
    }


    return (

        <Modal>
         <Card>
          <Card.Body className='card_body'>
            <Card.Title className='text-center add_heading'>Edit Record</Card.Title>
            <Button className='cross_button' onClick={closeEditHandler} >X</Button>
              <div className="error">{errorMessage}</div>
            <Form onSubmit={submitEditHandler}>
            <Form.Group className="mb-3" >
              <Form.Label className='add'>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" className='add_input' value={name} />
            </Form.Group> 
    
            <Form.Group className="mb-3" >
              <Form.Label className='add'>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter Subject" className='add_input' value={subject} />
            </Form.Group> 
    
            <Form.Group className="mb-3" >
              <Form.Label className='add'>Marks</Form.Label>
              <Form.Control type="number" placeholder="Enter Marks" className='add_input' value={marks} onChange={updateMarksHandler}/>
              <Form.Text className="text-muted">  Only Marks Can be update   </Form.Text>
            </Form.Group> 
            <Button className='form_button add_button' style={{width:'100%'}} type='submit'>Submit</Button>
            </Form>
    
    
          </Card.Body>
        </Card>
        </Modal>
      )
}

export default EditOne
