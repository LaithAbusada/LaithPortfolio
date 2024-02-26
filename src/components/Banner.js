import React, { useState, useEffect } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/spaceman.png';
import resume from '../assets/LaithAbusadaResume.pdf';
import linkedIn from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import instaIcon from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/github3.svg';



export const Banner = () => {
  var ReactRotatingText = require('react-rotating-text');

  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            
            <h1>  
              Hi, I'm Laith Abusada 
        </h1>
        <span className="wrap"><ReactRotatingText items={['Software Engineer', 'Web Developer', 'Mobile Developer','Honors Student']} /></span>
            
            <p> 
            Dedicated software engineering student and proficient web developer, passionate about creating innovative digital experiences.
            </p>
            <span className="banner-text">
                <div className="social-icon">
                    <a href='https://www.linkedin.com/in/laithabusada/'  target="_blank"><img src = {linkedIn} alt =""/></a>
                    <a href='https://github.com/LaithAbusada' target="_blank"><img src = {githubIcon} alt =""/></a>
                    <a href='https://www.instagram.com/abusadalaith/' target="_blank"><img src = {instaIcon} alt =""/></a>

                </div>
                
            </span>
            <button onClick={console.log("Downloading")}>
                <a href = {resume} download = "LaithAbusadaResume">Download CV<ArrowRightCircle size={25} style= {{}} /> </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}> 
            <img src={headerImg} alt="Header Img"  className='HeaderImage'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
