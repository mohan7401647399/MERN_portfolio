import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/instagram.svg";
import navIcon4 from "../assets/img/stackoverflow.svg";
import navIcon5 from "../assets/img/dev-to.svg";
import { useUserContext } from './contextAPI';

export const Footer = () => {

  const { scrolled } = useUserContext();

  return (
    <>
      <footer className="footer m-2">
        <Container>
          <Row className={scrolled ? "animate2" : "show-animate2"}>
            <Col size={12} sm={6} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center text-sm-start mt-3">
              <a href="/home" className="text-decoration-none text-info"><h1>R.Mohan</h1></a>
              <span>Junior MERN stack developer</span>
            </Col>
            <Col size={12} sm={6} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center m-auto p-2">
              <div className="social-icon d-inline">
                <a href="https://github.com/mohan7401647399"><img src={navIcon2} alt="Github" /></a>
                <a href="https://stackoverflow.com/users/23556968/mohan-r"><img src={navIcon4} alt="StackOverflow" /></a>
                <a href="https://www.linkedin.com/in/mohan-r-86164b24b/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://dev.to/mohan7401647399"><img src={navIcon5} alt="dev-to" /></a>
                <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="Instagram" /></a>
              </div>
            </Col>
            <Col size={12} sm={12} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center m-auto">
              <p>Phone/Whatsapp: 7401647399 / 8667764437</p>
              <p>Official Mail id: mtm.kcs@gmail.com</p>
            </Col>
            <Col className="text-center text-secondary">
              &copy; Copyright 2024 Mohan
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
