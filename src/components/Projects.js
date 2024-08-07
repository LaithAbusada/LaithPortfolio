import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wings.jpg";
import projImg2 from "../assets/img/atm.jpg";
import projImg3 from "../assets/img/fuel.jpg";
import haweytak from "../assets/Haweytak.pdf";
import ProGas from "../assets/ProGas.pdf";
import portfolio from "../assets/img/portfolio.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projImg4 from "../assets/img/haweytak.jpg";
import carousel from "../assets/img/Carousel.png";
import weather from "../assets/img/weather.png";
import recipe from "../assets/img/recipe.png";
export const Projects = () => {
  const mobileApplication = [
    {
      title: "Wings Shop Application",
      description: "Kotlin",
      imgUrl: projImg1,
      github: "https://github.com/Noor-AQ/Winged",
    },
    {
      title: "ATM Application",
      description: "C#",
      imgUrl: projImg2,
      github: "",
    },
    {
      title: "Fuel Price Prediction Application",
      description: "Flutter & Machine Learning",
      imgUrl: projImg3,
      github: "",
    },
  ];

  const SRS = [
    {
      title: "Fuel Price Prediction SRS",
      description: "Documentation",
      imgUrl: projImg3,
      github: ProGas,
    },
    {
      title: "Haweytak SRS",
      description: "Documentation",
      imgUrl: projImg4,
      github: haweytak,
    },
  ];

  const webApplications = [
    {
      title: "Portfolio Website",
      description: "React JS",
      imgUrl: portfolio,
      github: "https://github.com/LaithAbusada/LaithPortfolio",
    },
    {
      title: "Shahid Carousel",
      description: "React JS & Authentication",
      imgUrl: carousel,
      github: "https://github.com/LaithAbusada/Shahid-Carousel",
    },
    {
      title: "Weather Platform",
      description: "React JS & Context API",
      imgUrl: weather,
      github: "https://github.com/LaithAbusada/Shahid-Carousel",
    },
    {
      title: "Recipe Sharing Application",
      description: "Next JS & Firebase",
      imgUrl: recipe,
      github: "https://github.com/LaithAbusada/Recipe-Sharing-Platform",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <span className="reduceSize">Mobile Apps</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <span className="reduceSize">Web Apps</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <span className="reduceSize">SRS</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {mobileApplication.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webApplications.map((item, index) => {
                            return <ProjectCard key={index} {...item} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {SRS.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
