import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useUserContext } from './contextAPI';
import resume from '../assets/img/Resume.pdf'
import { BsArrowDownSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

export const Banner = () => {

  const { text, scrolled } = useUserContext();

  return (
    <>
      <section className="banner">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} lg={6} md={6} xl={7} className={scrolled ? "animate1" : "show-animate1"}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <span className="m-3 p-2" style={{ "fontSize": "35px" }}><a className="text-warning" href={resume} download="resume"><BsArrowDownSquareFill />
                    </a></span>
                    <h1>{`Hi! I'm Mohan`} <span className="txt-rotate"><span className="wrap text-info">{text}</span></span></h1>
                    <p>
                      👋 Hello! I'm <span className="text-warning">Mohan R</span>, a passionate and detail-oriented Web Application Developer with a track record of creating powerful, secure, and user-friendly web solutions. I take pride in crafting robust applications that elevate businesses and empower users.
                    </p>
                    <b className=" text-success">I will not rest untill i reach my goal</b>
                    <button onClick={() => console.log('connect')}>Let&#39;s Connect <ArrowRightCircle size={25} /></button>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={5} className="mt-4">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div className="bannerbox m-auto">
                      <div className="bannerimg">
                        <img className="m-auto p-auto" src={headerImg} alt="Header Img" />
                        <h2>MERN stack developer</h2>
                        <Button variant="outline-primary">
                          <a href="/" className="text-white text-decoration-none">Hire Me</a>
                        </Button>
                      </div>
                    </div>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
