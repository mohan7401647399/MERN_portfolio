import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/LOGO.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { useUserContext } from './contextAPI';

export const NavBar = () => {

  //  use useContext
  const { activeLink, scrolled, onUpdateActiveLink } = useUserContext();

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <h1 className="text-info">Mohan R</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohan7401"><img src={navIcon1} alt="Linkdin" /></a>
              <a href="https://github.com/mohan7401647399"><img src={navIcon2} alt="github" /></a>
              <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="instagram" /></a>
            </div>
            <HashLink to='#connect'>
              <button><span className="vvd111">Let’s Connect with us</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
