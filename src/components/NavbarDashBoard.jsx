import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Container,Nav} from 'react-bootstrap'
import './NavbarDashBoard.css';
import StudentProvider from '../store/StudentProvider';

const NavbarDashBoard = () => {
  return (
    // <StudentProvider>
    <Navbar expand="lg" className="navbar_header">
    <Container className='navbar_content'>
      <Navbar.Brand as={Link} to="/dashboard" className='navbar-link'>DashBoard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/dashboard/home" className='navbar-link'>Home</Nav.Link>
          <Nav.Link href="#link" className='navbar-link'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


    // </StudentProvider>
);
  
}

export default NavbarDashBoard
