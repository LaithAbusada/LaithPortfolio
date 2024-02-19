import { useState , useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github3.svg";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    
    email: '',
  
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  

  


  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    setTimeout(() => {
      emailjs
        .sendForm('service_ctlqrio', 'template_0ka7xkh', form.current, {
          publicKey: 'GS9EWZBpB9zJ3oh6L',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setStatus({ succes: true, message: 'Message sent successfully'});
          },
          (error) => {
            console.log('FAILED...', error.text);
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
          },
        )
        .finally(() => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
        });
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus({ message: '', success: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [status.message]);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit = {sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text"  placeholder="Name" name = "sender_name"  value={formDetails.firstName}  onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email"  placeholder="Email Address" name = "sender_email"  value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}/>
                    </Col>
                   </Row>
                   <Row>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name ="message" value={formDetails.message}  onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    </Col>
                     <button type="submit"><span>{buttonText}</span></button>
                     {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
    
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