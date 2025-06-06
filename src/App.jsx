import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaMoon, FaSun } from "react-icons/fa";
import CVPage from './pages/CV';
import NotFoundPage from './pages/error404';
import InfoPage from './pages/info';
import { useTheme } from './context/useTheme';
import { useState } from 'react';

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false); // Collapse navbar
  };

  const NavigationBar = () => (
    <Navbar collapseOnSelect expanded={expanded} fixed="top" expand="lg" className="bg-body-tertiary" bg={darkMode ? "dark" : "light"} data-bs-theme={darkMode ? "dark" : "light"} style={{opacity: "95%"}} data-testid="navbar-test-id">
      <Container>
        <Navbar.Brand as={NavLink} to="/">My Site</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          onClick={
            (e) => {
              e.currentTarget.blur();
              setExpanded((prev) => !prev);
            }
          }
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={handleNavLinkClick}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavLinkClick}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const Footer = () => (
    <Container className="footer-wrapper" data-testid="footer-test-id">
      <h6>Built with React and deployed with GitHub Actions.</h6>
    </Container>
  );

  return (
    <div data-testid="app-root">
      {/* Navigation Bar */}
      <NavigationBar />
      <Button className="theme-button" onClick={toggleDarkMode} 
              variant={darkMode ? "light" : "outline-dark"} data-testid="theme-button-test-id">
        {darkMode ? <FaSun/> : <FaMoon/>}
      </Button>
      <div style={{ paddingTop: '50px' }}></div>
      {/* Body */}
      <main className="page-wrapper">
          <Routes>
            <Route path="/" element={<CVPage />} />
            <Route path="/about" element={<InfoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
