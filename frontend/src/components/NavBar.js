import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import React from 'react';

export function NavBar() {

  return (
    <>
      <Navbar expand={"md" || "lg" || "xl"} className="bg-black">
        <Container fluid>
          <Navbar.Brand href="/" className='text-primary'> <h4><b>&#123; Mohan &#125; </b></h4>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              variant='pills'
              defaultActiveKey="/homepage"
            >
              <Nav.Link href="#homepage" className=' text-white'>Home</Nav.Link>
              <Nav.Link href="#about" className=' text-white'>About</Nav.Link>
              <Nav.Link href="#skills" className=' text-white'>Skills</Nav.Link>
              <Nav.Link href="#project" className=' text-white'>Projects</Nav.Link>
              <Nav.Link href="#connect" className=' text-white'>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};