import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/instagram.svg";
import navIcon4 from "../assets/img/stackoverflow.svg";
import navIcon5 from "../assets/img/dev-to.svg";
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/img/Resume.pdf';
import { BsArrowDownSquareFill } from "react-icons/bs";
import { useUserContext } from './contextAPI';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Title() {
    const { scrolled } = useUserContext();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" { ...props }>
            Click to download my resume
        </Tooltip>
    );

    return (
        <section id="home" className="hero-section text-white flex items-center justify-center min-h-screen">
            <Container className="text-center">
                <Row className={ scrolled ? "animate" : "show-animate" }>
                    <Col xs={ 12 }>
                        <div className="mt-4">
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Hi, I'm Mohan
                            </h1>
                            <p className="text-lg text-gray-300 mt-3">
                                A **MERN Stack Developer** passionate about crafting **scalable** and **high-performance** web applications.
                            </p>

                            {/* Social Media Icons */ }
                            <div className="social-icons mt-4">
                                <a href="https://github.com/mohan7401647399" className="social-link"><img src={ navIcon2 } alt="Github" /></a>
                                <a href="https://stackoverflow.com/users/23556968/mohan-r" className="social-link"><img src={ navIcon4 } alt="StackOverflow" /></a>
                                <a href="https://www.linkedin.com/in/mohan-r-86164b24b/" className="social-link"><img src={ navIcon1 } alt="LinkedIn" /></a>
                                <a href="https://dev.to/mohan7401647399" className="social-link"><img src={ navIcon5 } alt="Dev.to" /></a>
                                <a href="https://www.instagram.com/messiah.freakin" className="social-link"><img src={ navIcon3 } alt="Instagram" /></a>
                            </div>

                            {/* Resume & Contact Buttons */ }
                            <div className="mt-6 flex flex-wrap justify-center gap-4">
                                <a href={ resume } download="Mohan_Resume" className="resume-button flex items-center">
                                    <OverlayTrigger placement="left" overlay={ renderTooltip }>
                                        <Button variant="primary" className="flex items-center px-4 py-2 text-lg">
                                            Resume <BsArrowDownSquareFill className="ml-2 text-xl" />
                                        </Button>
                                    </OverlayTrigger>
                                </a>
                                <HashLink to='#connect'>
                                    <Button variant="info" className="px-4 py-2 text-lg">Contact</Button>
                                </HashLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
