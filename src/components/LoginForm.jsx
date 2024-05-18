import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import "./RegistrationForm.css";

const LoginForm = () => {

    // set state for the registration
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState('')

    //navigation
    const navigate = useNavigate()


    //handling the data of the register-teacher
  
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }

    // print the data enter
    const LoginDataHandler = async(e) =>{
        e.preventDefault();

        if (email === "" || password === "" ||password.length === 0) {
            setError(true);
            return;
          }
    
     
        const data = {
            email:email,
            password:password
        }
        console.log(data)
       
        console.log('Register data--> ',data);
       
        try {
          const res = await axios.post('http://localhost:8000/teacher/login',data);
          if(res.status===200){
            navigate('/dashboard')
          }
        } catch (error) {
          setErrorMessage(error.response.data.message);
        }


        // clearing the data after entering
        setEmail('');
        setPassword('');
    }


    useEffect(()=>{
        if(error){
            setErrorMessage('All the Fields are required!')
        }
    },[error])



  return (
    <div className="register_form">
      <Form className="container container_form" onSubmit={LoginDataHandler}>
      <h4 className="form_title">Login</h4>
      <div className="error">
        {errorMessage}
        </div>
           
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={emailHandler} value={email}/>
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

export default LoginForm;
