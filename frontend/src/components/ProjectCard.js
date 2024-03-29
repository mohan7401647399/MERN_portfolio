import { Col } from "react-bootstrap";
import { BsLink } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, link, imgUrl }) => {
  return (
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
            <Button variant="outline-success">
              <a className="text-white text-decoration-none" href={link}>Click here <BsLink />
              </a>
            </Button>
        </div>
      </div>
    </Col>
  )
}



export const MernProjectsCard = ({ title, link, imgUrl }) => {
  return (
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
            <Button variant="outline-success">
              <a className="text-white text-decoration-none" href={link}>Click here <BsLink />
              </a>
            </Button>
        </div>
      </div>
    </Col>
  )
}
