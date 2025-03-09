import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/instagram.svg";
import navIcon4 from "../assets/img/stackoverflow.svg";
import navIcon5 from "../assets/img/dev-to.svg";
import { useUserContext } from './contextAPI';

export const Footer = () => {
  const { scrolled } = useUserContext();

  return (
    <footer className="footer bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <Container>
        <Row className={ `flex flex-col md:flex-row justify-between items-center ${scrolled ? "animate2" : "show-animate2"}` }>

          {/* Left Section - Branding */ }
          <Col md={ 4 } className="text-center md:text-left">
            <a href="/home" className="text-decoration-none text-blue-400 hover:text-blue-600 transition duration-300">
              <h1 className="text-3xl font-bold">R.Mohan</h1>
            </a>
            <span className="text-gray-400">Junior MERN Stack Developer</span>
          </Col>

          {/* Center Section - Social Icons */ }
          <Col md={ 4 } className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/mohan7401647399" className="social-link"><img src={ navIcon2 } alt="Github" /></a>
            <a href="https://stackoverflow.com/users/23556968/mohan-r" className="social-link"><img src={ navIcon4 } alt="StackOverflow" /></a>
            <a href="https://www.linkedin.com/in/mohan-r-86164b24b/" className="social-link"><img src={ navIcon1 } alt="LinkedIn" /></a>
            <a href="https://dev.to/mohan7401647399" className="social-link"><img src={ navIcon5 } alt="Dev.to" /></a>
            <a href="https://www.instagram.com/messiah.freakin" className="social-link"><img src={ navIcon3 } alt="Instagram" /></a>
          </Col>

          {/* Right Section - Contact Info */ }
          <Col md={ 4 } className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-gray-400">📞 <strong>Phone/WhatsApp:</strong> 7401647399 / 8667764437</p>
            <p className="text-gray-400">📧 <strong>Email:</strong> <a href="mailto:mtm.kcs@gmail.com" className="text-blue-400 hover:underline">mtm.kcs@gmail.com</a></p>
          </Col>

        </Row>

        {/* Bottom Section - Copyright */ }
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; { new Date().getFullYear() } Mohan. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};
