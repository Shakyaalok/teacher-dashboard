import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {Navbar,Container,Nav} from 'react-bootstrap'
import './NavbarDashBoard.css';

const NavbarDashBoard = () => {

  const navigate = useNavigate();
   const logoutHandler = ()=>{
    localStorage.removeItem('token');
    navigate('/login')

   }
  return (
    <Navbar expand="lg" className="navbar_header">
    <Container className='navbar_content'>
      <Navbar.Brand as={Link} to="/dashboard" className='navbar-link'>DashBoard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/dashboard/home" className='navbar-link'>Home</Nav.Link>
          <Nav.Link href="#link" className='navbar-link' onClick={logoutHandler}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

);
  
}

export default NavbarDashBoard
