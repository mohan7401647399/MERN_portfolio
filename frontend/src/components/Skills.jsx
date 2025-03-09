import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Row } from "react-bootstrap";
import Cart from './Cart';
import { useUserContext } from './contextAPI';
import { useEffect, useState, useRef } from "react";

export const Skills = () => {
    const { skillsLists } = useUserContext();
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        // Check visibility on page load
        if (skillsRef.current) {
            const rect = skillsRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setIsVisible(true);
            }
        }

        return () => {
            if (skillsRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section
            className={ `skills-section relative p-10 m-5 flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } transition-all duration-1000 ease-out` }
            id="skills"
            ref={ skillsRef }
        >
            {/* Section Header */ }
            <h2 className="text-4xl font-bold text-white mb-6 text-center titleTech">Technologies & Tools</h2>
            <p className="text-gray-300 text-center max-w-3xl">
                I specialize in both front-end and back-end development, using modern technologies to build
                scalable and responsive applications.
            </p>

            {/* Skills List */ }
            <Row className="w-full mt-8">
                <Col xl={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xxl={ 12 } className="text-center">
                    <ul className="text-lg text-gray-300 space-y-2 leading-relaxed">
                        <li>⚡ <strong>Front-End:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
                        <li>⚙️ <strong>Back-End:</strong> Node.js, Express.js, Python</li>
                        <li>🗄️ <strong>Databases:</strong> MongoDB, MySQL, Firebase</li>
                    </ul>
                </Col>

                {/* Skill Cards with Animation */ }
                <Col className="flex flex-wrap gap-6 justify-center mt-6">
                    { skillsLists.map((skill, index) => (
                        <Cart key={ index } { ...skill } index={ index } />
                    )) }
                </Col>
            </Row>

            {/* Background Decoration */ }
            <img className="background-image-left absolute left-0 top-1/2 opacity-20 w-64" src={ colorSharp } alt="bg" />
        </section>
    );
};
