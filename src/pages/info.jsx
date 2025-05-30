import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useTheme } from '../context/useTheme'

import logo2 from "../assets/logo2.jpeg" 
import { FaGithub, FaLinkedin } from "react-icons/fa";


function InfoPage() {
  const { darkMode } = useTheme();
  const infoList = [
    "Hi! I’m a DevOps Engineer who genuinely enjoys making things run smoothly - whether it’s automating repetitive tasks or building out reliable infrastructure.",
    "I’ve worked with tools like Docker, Kubernetes, Terraform, and AWS, and I’m always excited to learn something new that can make systems faster, more resilient, or easier to manage.",
    "Outside of work, I’m the kind of person who enjoys digging into a tricky issue until it’s solved - and then turning the solution into a reusable script so it never becomes a problem again.",
    "I'm a big animal lover, I believe they help keep life grounded (and occasionally chaotic).",
    "On my free time, I like to learn new skills, my recent hobby is learning woodworking and restoring old furniture."
  ];

  return(
    <Container fluid style={{ width: '90%', margin: '0 auto', padding: '0' }} >
      <br/>
      {/* Logo */}
      <Row style={{ width: '50%', margin: '0 auto', marginBottom: '1rem' }}>
          <Col>
              <Image src={logo2} roundedCircle fluid alt='logo-img-2' style={{opacity: "60%"}}/>
          </Col>
      </Row>

      {/* About */}
      <Row>
            <h1>About Me</h1>
      </Row>
      <Row className='border-shadow'>
        <Container>
          {infoList.map((i, index) => (
            <Row key={index} className="align-items-center" style={{ minHeight: "4rem" }}>
              <Col xs="2" className="d-flex justify-content-center">
                <div className="ball line-color" />
              </Col>
              <Col style={{textAlign: "left", marginBottom: "1.5rem"}}>{i}</Col>
            </Row>
          ))}
        </Container>
      </Row>
      
      <Row className="border-shadow">
        <h1>Links</h1>
        <div style={{display: "flex", justifyContent: "center"}}>
          <a className={darkMode ? 'icon-link light-ibg': 'icon-link'} href="https://github.com/Einat-Sh/" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
          <a className={darkMode ? 'icon-link light-ibg': 'icon-link'} href="https://www.linkedin.com/in/einat-shoval-b5739b18a/" target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a>
        </div>
      </Row>
    </Container>
  );
}

  export default InfoPage;