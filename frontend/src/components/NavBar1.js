import { Navbar, Nav, Container, Button } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { useUserContext } from './contextAPI';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const NavBar = () => {

  //  use useContext
  const { activeLink, scrolled, onUpdateActiveLink } = useUserContext();

  return (
    <Navbar expand={"md" || "sm"} className={scrolled ? "scrolled" : ""}>
      <Container className="navbartext">
        <Navbar.Brand href="/">
          <h1 className="text-info">Mohan R</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon bg-black"></span>
        </Navbar.Toggle>
        <Navbar.Offcanvas id="basic-navbar-nav" placement="top" scroll={true}>
          <Offcanvas.Header >
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mohan7401"><img src={navIcon1} alt="Linkdin" /></a>
                <a href="https://github.com/mohan7401647399"><img src={navIcon2} alt="fb" /></a>
                <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="instagram" /></a>
              </div>
              <HashLink to='#connect'>
                <Button className="border-2"><span className="vvd111">Let&#39;s Connect with us</span></Button>
              </HashLink>
            </span>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar >
  );
};
