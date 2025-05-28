import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import logo2 from "../assets/logo2.jpeg" 
import { FaGithub, FaLinkedin } from "react-icons/fa";


function InfoPage() {
  const cline = {backgroundColor: "#518fc2"}
  const lineDecoration = () => (
    <div className="vertical-line-container"style={{height: "100%", margin: "0", padding: "0"}} >
        <div className="ball" style={cline}/>
        <div className="vertical-line" style={cline}/>
        <div className="ball" style={cline}/>
    </div>
  );

  return(
    <Container fluid style={{ width: '90%', margin: '0 auto', padding: '0' }} >
      <br/>
      {/* Logo */}
      <Row style={{ width: '25%', margin: '0 auto', marginBottom: '1rem' }}>
          <Col>
              <Image src={logo2} roundedCircle fluid alt='logo-img-2' style={{opacity: "60%"}}/>
          </Col>
      </Row>

      {/* About */}
      <Row>
            <h1>About Me</h1>
      </Row>
      <Row className="border-shadow">
        <Col xs="2">
        {lineDecoration()}
        </Col>
        <Col>
          <p>
            Hi! I’m a DevOps Engineer who genuinely enjoys making things run smoothly - whether it’s automating repetitive tasks or building out reliable infrastructure.
          </p>
          <p>
            I’ve worked with tools like Docker, Kubernetes, Terraform, and AWS, and I’m always excited to learn something new that can make systems faster, more resilient, or easier to manage.
          </p>
          <p>
            Outside of work, I’m the kind of person who enjoys digging into a tricky issue until it’s solved - and then turning the solution into a reusable script so it never becomes a problem again.
          </p>
          <p>
            I'm a big animal lover, I believe they help keep life grounded (and occasionally chaotic).
          </p>
          <p>
            On my free time, I like to learn new skills, my recent hobby is learning woodworking and restoring old furniture.
          </p>
        </Col>
      </Row>

      <Row className="border-shadow">
        <h1>Contact</h1>
        <div style={{display: "flex", justifyContent: "center"}}>
          <a className='icon-link' href="https://github.com/Einat-Sh/" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
          <a className='icon-link' href="https://www.linkedin.com/in/einat-shoval-b5739b18a/" target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a>
        </div>
      </Row>
    </Container>
  );
}
    // <FaInfo/>
    // <div className="max-w-4xl mx-auto px-4 py-8">
    //   <div className={`${cardClasses} rounded-2xl border p-8`}>
    //     <div className="text-center mb-8">
    //       <Info className={`h-16 w-16 mx-auto mb-4 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`} />
    //       <h1 className="text-3xl font-bold mb-2">About This Site</h1>
    //       <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
    //         A modern, responsive CV website built with React
    //       </p>
    //     </div>

    //     <div className="grid md:grid-cols-2 gap-8">
    //       <div>
    //         <h2 className="text-xl font-bold mb-4">Features</h2>
    //         <ul className={`space-y-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
    //           <li>• Responsive design that works on all devices</li>
    //           <li>• Light and dark theme support</li>
    //           <li>• Clean, professional layout</li>
    //           <li>• Modern UI components</li>
    //           <li>• Fast loading and smooth animations</li>
    //           <li>• Accessible navigation</li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h2 className="text-xl font-bold mb-4">Technology Stack</h2>
    //         <ul className={`space-y-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
    //           <li>• React 18 with Hooks</li>
    //           <li>• Tailwind CSS for styling</li>
    //           <li>• Lucide React for icons</li>
    //           <li>• Responsive grid layouts</li>
    //           <li>• CSS transitions and animations</li>
    //           <li>• Modern JavaScript (ES6+)</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    //       <h3 className="text-lg font-bold mb-2">Design Philosophy</h3>
    //       <p className="opacity-90">
    //         This CV site emphasizes clean design, professional presentation, and user experience. 
    //         The layout is optimized for readability while maintaining visual appeal across all device sizes.
    //         The theme switcher ensures comfortable viewing in any lighting condition.
    //       </p>
    //     </div>
    //   </div>
    // </div>

  export default InfoPage;