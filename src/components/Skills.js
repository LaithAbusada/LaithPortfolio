import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from '../assets/img/newmeter1.svg';
import meter2 from '../assets/img/newmeter2.svg';
import meter3 from '../assets/img/newmeter3.svg';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
 
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                            Proficient in a wide array of programming languages including C, C++, C#, Java, and Python, with a focus on mobile application development.
                             Skilled in frontend and backend web development using ReactJS and FireBase, with expertise in implementing efficient algorithms and data structures.
                           
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image"></img>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image"></img>
                                    <h5>Mobile Application Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image"></img>
                                    <h5>Project Management</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image"></img>
                                    <h5>Leadership</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};
