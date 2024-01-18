import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const notify = () => toast("Subscription done!");


  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('');
  }

  const submitConnect = () => {
    alert("Submit")
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col sm={6} lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col sm={6} md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" required onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
              </div>
              <div className="new-email-bx-button">
                {/* <button onClick={submitConnect} onClick={notify} type="submit">Submit</button> */}
                <button onClick={ notify} type="submit">Submit <ToastContainer /> </button>

              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
