import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wings.jpg";
import projImg2 from "../assets/img/atm.jpg";
import projImg3 from "../assets/img/fuel.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg4 from "../assets/img/haweytak.jpg";

export const Projects = () => {

  const mobileApplication = [
    {
      title: "Wings Shop Application",
      description: "Kotlin",
      imgUrl: projImg1,
    },
    {
      title: "ATM Application",
      description: "C#",
      imgUrl: projImg2,
    },
    {
      title: "Fuel Price Prediction Application",
      description: "Flutter & Machine Learning",
      imgUrl: projImg3,
    },
  ];

  const SRS = [
   { title : "Fuel Price Prediction SRS",
    description : "Documentation",
    imgUrl : projImg3
  },
  {
    title : "Haweytak SRS",
    description : "Documentation",
    imgUrl : projImg4
  }
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
              
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"><span className="reduceSize">Mobile Apps</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"><span className="reduceSize">Web Apps</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"><span className="reduceSize">SRS</span></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          mobileApplication.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                   
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                    {
                          SRS.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}