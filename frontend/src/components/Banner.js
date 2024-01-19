import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/My1.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useUserContext } from './contextAPI';
import resume from '../assets/img/Resume.pdf'
import { BsArrowDownSquareFill } from "react-icons/bs";

export const Banner = () => {

  const { text } = useUserContext();

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <span className="m-3 p-2" style={{"fontSize":"35px"}}><a className="text-warning" href={resume} download="resume"><BsArrowDownSquareFill />
                  </a></span>
                  <h1>{`Hi! I'm Mohan`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                  <p>👋 Hello! I'm Mohan R, a passionate and detail-oriented Web Application Developer with a track record of creating powerful, secure, and user-friendly web solutions. I take pride in crafting robust applications that elevate businesses and empower users.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
