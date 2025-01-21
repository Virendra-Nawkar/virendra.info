import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-port.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import protimg from "../assets/img/proj-port.png";
import protchai from "../assets/img/get me cahi.jpeg";
import protmanager from "../assets/img/passmanger.jpeg";
import notesimg from "../assets/img/projnotes.jpeg";
import linktree from "../assets/img/linktree.jpeg";
import spoftify from "../assets/img/sportify.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects and skills.",
      imgUrl: protimg,
    },
    {
      title: "Get Me a Chai",
      description: "A page where users can contribute to the creator using Razorpay integration and GitHub OAuth authentication.",
      imgUrl: protchai,
    },
    {
      title: "PassOP",
      description: "A password manager to save, edit, and delete passwords stored in localhost and database.",
      imgUrl: protmanager,
    },
    {
      title: "Notes App",
      description: "A simple app to save, edit, and delete notes easily.",
      imgUrl: notesimg,
    },
    {
      title: "Linktree Clone",
      description: "A clone of Linktree allowing users to create their own landing page.",
      imgUrl: linktree,
    },
    {
      title: "Spotify Clone",
      description: "A basic Spotify clone with dynamic song addition and automatic playlist creation.",
      imgUrl: spoftify,
    },
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Under maintenance</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Under maintenancee</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
