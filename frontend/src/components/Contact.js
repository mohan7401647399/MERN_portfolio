import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/ddd.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useUserContext } from './contextAPI';
import { ToastContainer } from 'react-toastify';

export const Contact = () => {
  const { handleSubmit, formDetails, notify, buttonText, status, onFormUpdate } = useUserContext();
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form action="" onSubmit={handleSubmit}>
                    <Row id="userForm">
                      <Col size={12} sm={6} className="px-1">
<<<<<<< HEAD
                        <input type="text" name="firstName" required value={formDetails.firstName} placeholder="First Name" onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" required value={formDetails.lastName} placeholder="Last Name" onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" required value={formDetails.email} placeholder="Email Address" onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" required value={formDetails.phone} placeholder="Phone No." onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" required value={formDetails.message} placeholder="Message" onChange={onFormUpdate}></textarea>
=======
                        <input id="firstName" type="text" name="firstName" required value={formDetails.firstName} placeholder="First Name" onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input id="last_name" type="text" name="lastName" required value={formDetails.lastName} placeholder="Last Name" onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input id="email_address" type="email" name="email" required value={formDetails.email} placeholder="Email Address" onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input id="phone_no" type="tel" name="phone" required value={formDetails.phone} placeholder="Phone No." onChange={onFormUpdate} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea id="message" rows="6" name="message" required value={formDetails.message} placeholder="Message" onChange={onFormUpdate}></textarea>
>>>>>>> 84e77a20de81e704614f8a1010ccb1d1f67401c9
                        <button type="submit" onClick={formDetails.firstName === "" || formDetails.lastName === "" || formDetails.email === "" || formDetails.phone === "" || formDetails.message === "" ? "" : notify}>
                          <span>{buttonText}</span>
                          <ToastContainer />
                        </button>
                        <p className={status.success === false ? "text-danger" : "text-info"}>{status.message}</p>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
