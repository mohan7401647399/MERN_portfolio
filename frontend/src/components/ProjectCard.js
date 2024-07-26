import { Col } from "react-bootstrap";
import { BsLink } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, link, imgUrl, gitHub }) => {

  return (
    //    React clones
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx" >
        <img src={imgUrl} alt="React-clones" />
        <div className="proj-txtx d-grid w-auto">
          <h4>{title}</h4>
          <Button variant="outline-success" className=" m-1">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={link}>Live <BsLink />
            </a>
          </Button>
          <Button variant="outline-success" className=" m-1">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={gitHub}>GitHub <BsLink />
            </a>
          </Button>
        </div>
      </div>
    </Col>
  )
}


export const MernProjectsCard = ({ title, link, imgUrl, gitHub }) => {
  return (
    //  MERN clones
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="MERN-clones" />
        <div className="proj-txtx d-grid w-auto">
          <h4>{title}</h4>
          <Button variant="outline-success" className=" m-1">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={link}>Live <BsLink />
            </a>
          </Button>
          <Button variant="outline-success" className=" m-1">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={gitHub}>Github<BsLink />
            </a>
          </Button>
        </div>
      </div>
    </Col>
  )
}


export const JsGamesCard = ({ title, link, imgUrl, gitHub }) => {
  return (
    //  JS_Games
    <Col size={12} xs={10} sm={6} md={4} className="m-auto">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="JS_games" />
        <div className="proj-txtx d-grid w-auto">
          <h4>{title}</h4>
          <Button variant="outline-success" className=" m-1">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={link}>Live<BsLink />
            </a>
          </Button>
          <Button variant="outline-success" className=" m-1">
            <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href={gitHub}>Github<BsLink />
            </a>
          </Button>
        </div>
      </div>
    </Col>
  )
}