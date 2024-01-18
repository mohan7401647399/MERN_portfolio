import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useUserContext } from './contextAPI';

export const Projects = () => {

  const { projects } = useUserContext();

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item> <Nav.Link eventKey="first">Clones</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link eventKey="second">MERN</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link eventKey="third">Games</Nav.Link> </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row> {projects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p> <a href="https://github.com/mohan7401647399/MERN">MERN projects is here</a> </p>
                        <p> <a href="https://github.com/mohan7401647399">GITHUB link is here</a> </p>
                        <p> <a href="https://github.com/mohan7401647399/HTML-CSS-JS">HTML & CSS & JS projects is here</a> </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p><a href="https://papaya-kulfi-ae2a2c.netlify.app/">Dice game</a></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}
