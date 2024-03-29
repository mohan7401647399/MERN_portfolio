import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center text-sm-start mt-3">
            <a href="/" className="text-decoration-none text-info"><h1>R.Mohan</h1></a>
            <span>Junior MERN stack developer</span>
          </Col>
          <Col size={12} sm={6} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center mt-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohan-r-86164b24b/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/mohan7401647399"><img src={navIcon2} alt="Github" /></a>
              <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="Insta" /></a>
            </div>
          </Col>
          <Col size={12} sm={12} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center text-md-end text-sm-center">
            <p>Phone/Whatsapp: 7401647399 / 8667764437</p>
            <p>Official Mail id: mtm.kcs@gmail.com</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
