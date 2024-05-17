import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import "./RegistrationForm.css";

const RegistrationForm = () => {

    // set state for the registration
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    //handling the data of the register-teacher
    const namehandler=(e)=>{
        setName(e.target.value)
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }

    // print-out the data enter
    const RegsiterDataHandler = (e) =>{
        e.preventDefault();
        const data = {
            name:name,
            email:email,
            password:password
        }
       
        console.log('Register data--> ',data);

        // clearing the data after entering
        setName('');
        setEmail('');
        setPassword('');
    }



  return (
    <div className="register_form">
      <Form className="container container_form" onSubmit={RegsiterDataHandler}>
      <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="test" placeholder="Your Name" onChange={namehandler} value={name}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={emailHandler} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={passwordHandler} value={password}/>
        </Form.Group>
        <Button  type="submit" className="form_button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
