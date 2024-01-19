import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} md={4} lg={2} xs={12} xl={4} xxl={4}>
            <h1>R.Mohan</h1>
            <p>Junior MERN stack developer</p>
          </Col>
          <Col size={12} sm={12} md={6} lg={4} xs={12} xl={4} xxl={4}>
            <iframe className="p-1 m-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d497517.358220892!2d80.21934080000003!3d13.044940800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705680625466!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          <Col size={12} sm={12} md={8} lg={6} xs={12} xl={4} xxl={4} className="text-center text-sm-end mt-3">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohan-r-86164b24b/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/mohan.viper/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="Icon" /></a>
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
