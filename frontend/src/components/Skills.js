import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Card, Col, Image, ProgressBar, Row } from "react-bootstrap";
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

export const Skills = () => {

    return (
        <section className="sill p-2 m-2 d-flex" id="skills">
            <Row>
                <Col xl={12} sm={12} md={12} lg={12} xxl={12}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> <li>Front-End Development: Proficient in HTML, CSS, and JavaScript, I create stunning and responsive user interfaces that leave a lasting impression.</li>
<<<<<<< HEAD
                            <li>Back-End Development: Adept at server-side programming with Node.js and Python, handling complex business logic and data management efficiently.</li>
                            <li>Database Management: Skilled in working with SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB, and Firebase, ensuring data integrity and seamless performance.</li>
                        </p>
                    </div>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={HTML} thumbnail className=" border-0" />
                        <ProgressBar now={90} label={"HTML"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={CSS} thumbnail className=" border-0" />
                        <ProgressBar now={90} label={"CSS"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={JS} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"JS"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={BOOTSTRAP} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"BOOTSTRAP"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={SQL} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"SQL"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Card.Img src={MONGODB} />
                        <ProgressBar now={60} label={"MongoDB"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={SASS} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"SASS"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={TAILWIND} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"Tailwind"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={REACT} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"React"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={REACT_NATIVE} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"React-Native"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={NEXT_JS} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"NextJs"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={PYTHON} thumbnail className=" border-0" />
                        <ProgressBar now={60} label={"Python"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={NODEJS} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"NodeJs"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={EXPRESS_JS} thumbnail className=" border-0" />
                        <ProgressBar now={80} label={"ExpressJs"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={REDUX} thumbnail className=" border-0" />
                        <ProgressBar now={60} label={"Redux"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={POSTMAN} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"Postman"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={ANGULAR} thumbnail className=" border-0" />
                        <ProgressBar now={50} label={"Angular"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={NETLIFY} thumbnail className=" border-0" />
                        <ProgressBar now={90} label={"Netlify"} animated />
                    </Card>
                </Col>
                <Col xs={3} xl={2} sm={3} md={3} lg={2} xxl={4} className="mb-5">
                    <Card className="m-auto p-1 d-flex justify-content-between h-100 w-100">
                        <Image src={FIREBASE} thumbnail className=" border-0" />
                        <ProgressBar now={70} label={"Firebase"} animated />
                    </Card>
                </Col>
            </Row>
            <img className="background-image-left" src={colorSharp} alt="bg" />
        </section>
    )
=======
                        <li>Back-End Development: Adept at server-side programming with Node.js and Python, handling complex business logic and data management efficiently.</li>
                        <li>Database Management: Skilled in working with SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB, and Firebase, ensuring data integrity and seamless performance.</li></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider w-100">
                            <div className="item">
                                <img src={meter1} alt="MERN" />
                                <h5>MERN</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="React_JS" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="UI/UX_design" />
                                <h5>UI/UX design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Web_Development" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  )
>>>>>>> 84e77a20de81e704614f8a1010ccb1d1f67401c9
}
