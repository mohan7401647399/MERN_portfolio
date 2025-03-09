import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useUserContext } from './contextAPI';

export function NavBar() {
  const { scrollPercentage } = useUserContext();
  const [activeSection, setActiveSection] = useState('');

  // List of section IDs
  const sections = ["home", "skills", "project", "connect", "about"];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar expand="md" className="bg-black fixed-top">
        <Container fluid>
          <Navbar.Brand href="/" className="text-primary">
            <h4><b>&#123; Mohan &#125; </b></h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 font-bold mh-100" navbarScroll>
              { sections.map((id) => (
                <Nav.Link
                  key={ id }
                  href={ `#${id}` }
                  className={ `text-white px-3 py-2 rounded-md transition ${activeSection === id ? "bg-blue-500 text-white" : ""
                    }` }
                >
                  { id.charAt(0).toUpperCase() + id.slice(1) }
                </Nav.Link>
              )) }
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Scroll Progress Bar */ }
      <div className="fixed top-20 z-0 w-100">
        <div className="w-100 h-2 bg-amber-200">
          <div className="h-2 bg-violet-900 w-0" style={ { width: `${scrollPercentage}%` } }></div>
        </div>
      </div>
    </>
  );
};
