import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  // set state for the registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //navigation after successfull register
  const navigate = useNavigate();

  //handling the data of the register-teacher
  const namehandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // print the data enter
  const RegsiterDataHandler = async (e) => {
    e.preventDefault();
    // Validate form data
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      password.length === 0
    ) {
      setError(true);
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/teacher/register",
        data
      );
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }

    // clearing the data after entering
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (error) {
      setErrorMessage("All Fields are required");
    }
  }, [error]);

  return (
    <div className="register_form">
      <Form className="container container_form" onSubmit={RegsiterDataHandler}>
        <h4 className="form_title">Registration</h4>
        <div className="error">{errorMessage}</div>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="test"
            placeholder="Your Name"
            onChange={namehandler}
            value={name}
          />
         
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={emailHandler}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={passwordHandler}
            value={password}
          />
        </Form.Group>
        <Button type="submit" className="form_button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
