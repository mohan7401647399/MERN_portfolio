import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { useUserContext } from './contextAPI';

export const Skills = () => {

    const { responsive } = useUserContext();

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> <li>Front-End Development: Proficient in HTML, CSS, and JavaScript, I create stunning and responsive user interfaces that leave a lasting impression.</li>
                        <li>Back-End Development: Adept at server-side programming with Node.js and Python, handling complex business logic and data management efficiently.</li>
                        <li>Database Management: Skilled in working with SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB, and Firebase, ensuring data integrity and seamless performance.</li></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
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
}
