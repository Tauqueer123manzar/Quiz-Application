import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Topbar = () => {
  
  return (
   <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/" style={{fontSize:"35px",fontFamily:"initial"}}>Quiz App</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}

export default Topbar
