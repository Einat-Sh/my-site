import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import errorLogo from '../assets/error2.png'

const NotFoundPage = () => (
  <Container fluid style={{ width: '80%', margin: '0 auto' }} >
    <br/>
    {/* Logo */}
    <Row style={{ width: '20%', margin: '0 auto', marginTop: '5%' }}>
      <Col>
          <Image src={errorLogo} fluid alt='err-logo-img' />
      </Col>
    </Row>
    <Row>
      <h1>Oops! Page Not Found</h1>
      <br/>
      <h5>Looks like this page decided to take an unscheduled deployment break!</h5>
      <h5>Don't worry, even the best infrastructure has occasional hiccups.</h5>
    </Row>
  </Container>
);

  export default NotFoundPage;