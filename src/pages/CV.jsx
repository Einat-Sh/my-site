import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useTheme } from '../context/useTheme'

// icons import
import { MdCode, MdOutlineWork } from 'react-icons/md'
import { VscTools } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
// chatroom images
import CrImage1 from '../assets/cr1.png';
import CrImage2 from '../assets/cr2.png';
import CrImage3 from '../assets/cr3.png';
import CrImage4 from '../assets/cr4.png';
// site images
import logo1 from "../assets/logo1.jpeg" 
import S1 from '../assets/s1.png'

function CVPage() {
    const { darkMode } = useTheme();

    const projectSlidshow = ({data}) => (
        <div style={{ width: '50%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
            <Carousel fade controls={false} indicators={false}>
                {data.map((i, index) => (
                    <Carousel.Item key={index} interval={2000} style={{height: "100%", width: "100%"}}>
                        <Image src={i} alt={`Slide ${index + 1}`} style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block' }} fluid data-testid='nested-carousel-test-id'/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );

    const lineDecoration = () => (
        <div className="vertical-line-container">
            <div className="ball" />
            <div className="vertical-line" />
        </div>
    );

    return (
        <Container fluid style={{ width: '90%', margin: '0 auto' }} >
            <br/>
            {/* Logo */}
            <Row style={{ width: '30%', margin: '0 auto', marginBottom: '1rem' }}>
                <Col>
                    <Image src={logo1} roundedCircle fluid alt='logo-img' />
                </Col>
            </Row>
        
            {/* Intro Section */}
            <Row className="border-shadow">
                <h1>Einat Shoval</h1>
                <h5>DevOps Engineer</h5>
                <p>Passionate DevOps engineer with experience in automation, continuous integration/deployment and cloud infrastructure. <br/>Currently expanding expertise in cloud technologies, containerization, and CI/CD practices. Eager to learn more, develop and grow as a DevOps engineer.</p>
            </Row>

            {/* Projects */}
            <Row className="border-shadow">
                <h2 style={{padding: "1%"}}><MdCode/> Projects</h2>
                
                <Carousel className="w-100 text-center" data-bs-theme="dark" interval={null} data-testid='project-crsl-test-id' >
                    <Carousel.Item data-testid='card-1-test-id' >
                        <Card className="text-center" id={darkMode ? "card-dark" : "card-light"} data-testid='carousel-card'>
                            <Card.Body>
                                <Card.Title>My Site </Card.Title>
                                <Card.Text>
                                    This site was made using Next.js with Vite and deployed on GitHub pages using GitHub actions.
                                    <br/><br/>
                                    Following the build stage, both lint tests and jest tests are run before deployment is done.
                                    <br/><br/><a href="https://github.com/Einat-Sh/my-site" target="_blank" rel="noopener noreferrer" style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none' , color: 'black', fontSize: "2vw"}} ><FaGithub /></a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center" style={{ overflow: 'hidden' }}>
                                {projectSlidshow({data: [S1]})}
                            </Card.Footer>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item data-testid='card-2-test-id'>
                        <Card className="text-center" id={darkMode ? "card-dark" : "card-light"} data-testid='carousel-card'>
                            <Card.Body>
                                <Card.Title>Chatroom</Card.Title>
                                <Card.Text>
                                    Simple .NET Windows application in C# for a chatroom.
                                    <br/><br/>
                                    UI framework used: Windows Presentation Foundation (WPF).
                                    <br/><br/><a className='icon-link' href="https://github.com/Einat-Sh/GameOfChatRooms" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center" style={{ overflow: 'hidden' }}>
                                {projectSlidshow({data: [CrImage1, CrImage2, CrImage3, CrImage4]})}
                            </Card.Footer>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </Row>

            {/* Experience */}
            <Row className="border-shadow">
                <h2 style={{padding: "1%"}}><MdOutlineWork/> Work Experience</h2>
                <Container>
                    <Row>
                        <Col xs="2">
                            {lineDecoration()}
                        </Col>
                        <Col className='text-start'>
                            <h4>DevOps Engineer - Yahoo</h4>
                            <p>
                                Managed the building, maintenance and continuous development of CI/CD pipelines.
                                <br/><br/>Assisted with the first migration from on-premises to AWS EKS. 
                                <br/><br/>Developed applications and tools to automate workflows and streamline operations for the team. 
                            </p>
                            <h6>Worked with:</h6><br/>
                            <Stack direction="horizontal" gap={2} style={{fontSize: "18px", margin: '0 auto', flexWrap: 'wrap'}} className="justify-content-left">
                                {['Bash', 'Python', 'AWS', 'Docker', 'Kubernetes', 'Hadoop', 'Oozie', 'Yamas', 'Splunk', 'Git', 'Jira', 'ServiceNow', 'Screwdriver.cd'].map((i, index) => (<Badge bg="secondary" key={`stack1-${index}`}>{i}</Badge>))}
                            </Stack>
                        </Col>  
                        
                    </Row>
                    <br/><br/>
                    <Row>
                        <Col xs="2">
                            {lineDecoration()}
                        </Col>
                        <Col className='text-start'>
                            <h4>System Monitoring - Yahoo</h4>
                            <p>
                                Monitored and troubleshot a large scale and highly dynamic system in both the development and production environments.
                                <br/><br/>Developed automated troubleshooting tools and assisted in developing new alerts and graphs
                            </p>
                            <h6>Worked with:</h6><br/>
                            <Stack direction="horizontal" gap={2} style={{fontSize: "18px", margin: '0 auto', flexWrap: 'wrap'}} className="justify-content-left">
                                {['Bash', 'Python', 'SQL', 'Hadoop', 'Oozie', 'Yamas', 'Splunk', 'Splunk', 'Git', 'Jira', 'ServiceNow', 'Screwdriver.cd'].map((i, index) => (<Badge bg="secondary" key={`stack2-${index}`}>{i}</Badge>))}
                            </Stack>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </Row>

            {/* Technical Skills Section */}
            <Row className="border-shadow">
                <h2 style={{padding: "1%"}}><VscTools/> Technical Skills & Tools</h2>
                <Stack direction="horizontal" gap={2} style={{fontSize: "18px", margin: '0 auto', flexWrap: 'wrap'}} className="justify-content-center">
                    {['Docker', 'Kubernetes', 'AWS', 'Shell Scripting', 'Python', 'React', 'HTML', 'Javascript', 'CSS', 'HDFS', 'Storm', 'Oozie', 'Hbase', 'C', 'C++', 'C#', 'Java', 'Typescript'].map((i, index) => (<Badge bg="secondary" data-testid='skill-badge-test-id' key={`stack3-${index}`}>{i}</Badge>))}
                </Stack>
            </Row>

        </Container>
    );
}

export default CVPage;
