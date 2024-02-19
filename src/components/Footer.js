import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import linkedIn from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import instaIcon from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/github3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
           
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href='https://www.linkedin.com/in/laithabusada/'><img src = {linkedIn} alt =""/></a>
                    <a href='https://github.com/LaithAbusada'><img src = {githubIcon} alt =""/></a>
                    <a href='https://www.instagram.com/abusadalaith/'><img src = {instaIcon} alt =""/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}