import React, { useState, useEffect } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/spaceman.png';
import resume from '../assets/LaithAbusadaResume.pdf';



export const Banner = () => {
  var ReactRotatingText = require('react-rotating-text');


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            
            <h1>
              Hi Im Laith Abusada 
        </h1>
        <span className="wrap"><ReactRotatingText items={['Software Engineer', 'Web Developer', 'Mobile Developer','Honors Student']} /></span>
            
            <p> 
            Dedicated software engineering student and proficient web developer, passionate about creating innovative digital experiences.
            </p>
            <button onClick={console.log("Downloading")}>
              Download CV  <a href = {resume} download = "LaithAbusadaResume"><ArrowRightCircle size={25} /> </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}> {/* Corrected closing tag and placement */}
            <img src={headerImg} alt="Header Img"  className='HeaderImage'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
