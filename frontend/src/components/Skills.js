import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row } from "react-bootstrap";
import Cart from './Cart';
import { useUserContext } from './contextAPI';

export const Skills = () => {

    const { scrolled, skillsLists } = useUserContext();

    return (
        <>
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
                    <Col>
                        <div className='flex flex-wrap gap-5 justify-center'>
                            {
                                skillsLists.map((skill, index) => {
                                    return (
                                        <Cart key={index}  {...skill} />
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row >
                <img className="background-image-left" src={colorSharp} alt="bg" />
            </section >
        </>
    )
}
