import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/instagram.svg";
import navIcon4 from "../assets/img/stackoverflow.svg";
import navIcon5 from "../assets/img/dev-to.svg";
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/img/Resume.pdf'
import { BsArrowDownSquareFill } from "react-icons/bs";
import { useUserContext } from './contextAPI';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Title() {

    const { scrolled } = useUserContext();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to download
        </Tooltip>
    );

    return (
        <>
            <section id="home" className='banner m-auto' style={{ background: "rgba(192,192,192,0)", minHeight: "100vh" }} >
                <Container className='d-flex justify-content-center align-items-center text-center'>
                    <Row className={scrolled ? "animate" : "show-animate"}>
                        <Col xs={12} md={12} xl={12} sm={12} lg={12}>
                            <div className='mt-4'>
                                <h1 className='text-center title'>I'm Mohan</h1>
                                <div className="social-icon mt-3 text-center d-inline">
                                    <a href="https://github.com/mohan7401647399"><img src={navIcon2} alt="Github" /></a>
                                    <a href="https://stackoverflow.com/users/23556968/mohan-r"><img src={navIcon4} alt="StackOverflow" /></a>
                                    <a href="https://www.linkedin.com/in/mohan-r-86164b24b/"><img src={navIcon1} alt="linkedin" /></a>
                                    <a href="https://dev.to/mohan7401647399"><img src={navIcon5} alt="dev-to" /></a>
                                    <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="Instagram" /></a>
                                </div>
                                <div className='d-flex justify-content-center align-items-center mt-4'>
                                    <a className='text-decoration-none' href={resume} download="resume">
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}
                                        >
                                            <Button className='d-flex m-2' variant="outline-primary">
                                                Resume<BsArrowDownSquareFill />
                                            </Button>
                                        </OverlayTrigger>
                                    </a>
                                    <HashLink to='#connect' className=' text-decoration-none'>
                                        <Button className='m-2' variant="outline-info">Contact</Button>
                                    </HashLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </section >
        </>
    )
}