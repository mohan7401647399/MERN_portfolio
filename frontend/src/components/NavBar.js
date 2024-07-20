import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export function NavBar() {

  return (
    <Navbar expand={"lg" || "md"} className=" bg-black">
      <Container fluid>
        <Navbar.Brand href="/" className='text-primary'><b>Mohan</b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            variant='pills'
            defaultActiveKey="/home"
          >
            <Nav.Link href="#home" className=' text-white'>Home</Nav.Link>
            <Nav.Link href="#skills" className=' text-white'>skills</Nav.Link>
            <Nav.Link href="#project" className=' text-white'>projects</Nav.Link>
            <Nav.Link href="#connect" className=' text-white'>contact</Nav.Link>
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
  );
};