import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Image, ProgressBar, Row } from "react-bootstrap";
import HTML from '../assets/img/HTML.png'
import CSS from '../assets/img/CSS.png'
import JS from '../assets/img/JS.png'
import BOOTSTRAP from '../assets/img/BOOTSTRAP.png'
import SQL from '../assets/img/SQL.png'
import MONGODB from '../assets/img/MONGODB.png'
import SASS from '../assets/img/SASS.png'
import TAILWIND from '../assets/img/TAILWINDCSS.png'
import REACT from '../assets/img/REACT.png'
import REACT_NATIVE from '../assets/img/REACT NATIVE.png'
import NEXT_JS from '../assets/img/NEXTJS.png'
import PYTHON from '../assets/img/PYTHON.png'
import NODEJS from '../assets/img/NODEJS.png'
import EXPRESS_JS from '../assets/img/EXPRESSJS.png'
import REDUX from '../assets/img/REDUX.png'
import POSTMAN from '../assets/img/POSTMAN.png'
import ANGULAR from '../assets/img/ANGULAR.png'
import FIREBASE from '../assets/img/FIREBASE.png'
import NETLIFY from '../assets/img/NETLIFY.png'
import Cart from './Cart';
import { useUserContext } from './contextAPI';

export const Skills = () => {

    const { scrolled } = useUserContext();

    return (
        <section className="sill p-2 m-2 d-flex" id="skills">
            <Row>
                <Col xl={12} sm={12} md={12} lg={12} xxl={12} className={scrolled ? "animateSkill" : "show-animateSkill"}>
                    <div className="skill-bx wow zoomIn">
                        <h2 className='titleTech'>Technologies and Tools</h2>
                        <p>
                            <li>Front-End Development: Proficient in HTML, CSS, and JavaScript, I create stunning and responsive user interfaces that leave a lasting impression.</li>
                            <li>Back-End Development: Adept at server-side programming with Node.js and Python, handling complex business logic and data management efficiently.</li>
                            <li>Database Management: Skilled in working with SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB, and Firebase, ensuring data integrity and seamless performance.</li>
                        </p>
                    </div>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={HTML} thumbnail className=" border-0" />
                        <ProgressBar now={90} label={"HTML"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={CSS} thumbnail className=" border-0" />
                        <ProgressBar now={90} label={"CSS"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={JS} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"JS"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={BOOTSTRAP} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"BOOTSTRAP"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={SQL} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"SQL"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={MONGODB} thumbnail className=" border-0" />
                        <ProgressBar now={60} label={"MongoDB"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={SASS} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"SASS"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={TAILWIND} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"Tailwind"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={REACT} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"React"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={REACT_NATIVE} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"React-Native"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={NEXT_JS} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"NextJs"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={PYTHON} thumbnail className=" border-0" />
                        <ProgressBar now={60} label={"Python"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={NODEJS} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"NodeJs"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={EXPRESS_JS} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"ExpressJs"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={REDUX} thumbnail className=" border-0" />
                        <ProgressBar now={60} label={"Redux"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={POSTMAN} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"Postman"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={ANGULAR} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"Angular"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={NETLIFY} thumbnail className=" border-0" />
                        <ProgressBar now={90} label={"Netlify"} animated />
                    </Cart>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Cart>
                        <Image src={FIREBASE} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"Firebase"} animated />
                    </Cart>
                </Col>
            </Row >
            <img className="background-image-left" src={colorSharp} alt="bg" />
        </section >
    )
}
