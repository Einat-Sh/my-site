import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import errorLogo from '../assets/error2.png'

const NotFoundPage = () => (
  <Container fluid style={{ width: '100%', margin: '0 auto', padding: '0' }} >
    {/* Logo */}
    <Row className="justify-content-center" style={{ width: '35%', margin: '0 auto' }}>
      <Col className="text-center">
          <Image src={errorLogo} fluid alt='err-logo-img' />
      </Col>
    </Row>
    <Row className="justify-content-center" style={{padding: '0', margin: '0'}}>
      <Col xs={12} sm={12} style={{ paddingBottom: 0 }}>
        <h1 className="responsive-h1" style={{ marginBottom: '2rem' }}>Oops! Page Not Found</h1>
        <p  className="responsive-p" style={{ marginBottom: '1rem' }}>Looks like this page decided to take an unscheduled deployment break!</p>
        <p  className="responsive-p" >Don't worry, even the best infrastructure has occasional hiccups.</p>
      </Col>
    </Row>
  </Container>
);

  export default NotFoundPage;