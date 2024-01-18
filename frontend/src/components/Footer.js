import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>R.Mohan</h1>
            <p>Junior MERN stack developer</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-3">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohan-r-86164b24b/"><img src={navIcon1} alt="Icon"/></a>
              <a href="https://www.facebook.com/mohan.viper/"><img src={navIcon2} alt="Icon"/></a>
              <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="Icon"/></a>
            </div>
            <p>Phone/Whatsapp: 7401647399 / 8667764437</p>
            <p>Official Mail id: mtm.kcs@gmail.com</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
