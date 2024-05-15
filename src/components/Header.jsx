import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
     <Navbar expand="lg"  >
      <Container>
        <Navbar.Brand className='text-white b1' href="#home" ><span style={{fontSize:'60px'}}>Dilsha</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>About Me</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Services</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Skills</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Portfolio</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header