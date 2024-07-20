import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/img/Resume.pdf'
import { BsArrowDownSquareFill } from "react-icons/bs";

export default function Title() {
    return (
        <section className='banner' style={{ background: "rgba(192,192,192,0)", height: "600px" }}>
            <Container className='m-auto w-50 text-center'>
                <Row>
                    <Col xs={12} md={12} xl={12} sm={12} lg={12}>
                        <div className='mt-4'>
                            <h1 className='d-inline'>I'm Mohan</h1>
                            <div className="social-icon mt-3">
                                <a href="https://www.linkedin.com/in/mohan-r-86164b24b/"><img src={navIcon1} alt="linkedin" /></a>
                                <a href="https://github.com/mohan7401647399"><img src={navIcon2} alt="Github" /></a>
                                <a href="https://www.instagram.com/messiah.freakin"><img src={navIcon3} alt="Insta" /></a>
                            </div>
                            <div className='d-flex w-50 m-auto mt-3'>
                                <Button className='d-flex m-2' variant="outline-light">
                                    <a className='text-warning text-decoration-none' href={resume} download="resume">
                                        Resume<BsArrowDownSquareFill />
                                    </a></Button>
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