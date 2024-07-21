import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/img/Resume.pdf'
import { BsArrowDownSquareFill } from "react-icons/bs";
import { useUserContext } from './contextAPI';

export default function Title() {

    const { scrolled } = useUserContext();

    return (
        <section className='banner' style={{ background: "rgba(192,192,192,0)", height: "700px" }}>
            <Container className='d-flex justify-content-center align-items-center text-center'>
                <Row className={scrolled ? "animate" : "show-animate"}>
                    <Col xs={12} md={12} xl={12} sm={12} lg={12}>
                        <div className='mt-4'>
                            <h1 className='text-center' style={{ textShadow: "2px 3px 5px red" }}>I'm Mohan</h1>
                            <div className="social-icon mt-3 text-center d-inline">
                                <a href="https://www.linkedin.com/in/mohan-r-86164b24b/"><img src={navIcon1} alt="linkedin" /></a>
                                <a href="https://github.com/mohan7401647399"><img src={navIcon2} alt="Github" /></a>
                                <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="Insta" /></a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-4'>
                                <Button className='d-flex m-2' variant="outline-light">
                                    <a className='text-warning text-decoration-none' href={resume} download="resume">
                                        Resume<BsArrowDownSquareFill />
                                    </a>
                                </Button>
                                <HashLink to='#connect' className=' text-decoration-none'>
                                    <Button className='m-2' variant="outline-light">Contact</Button>
                                </HashLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}