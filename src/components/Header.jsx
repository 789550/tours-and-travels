<<<<<<< HEAD

import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/wanderlust.png'; 
=======
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
<<<<<<< HEAD
    <Navbar expand="lg" className="navbar navbar-dark fixed-top bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home">
        <img
            src={logo}
            alt="Logo"
            width="60"
            height="50"
            className="d-inline-block align-top"
            style={{ marginRight: '10px' }} 
          />
          Wanderlust
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
            <Link to="/tours" className={`nav-link ${isActive('/tours')}`}>Tours</Link>
          </Nav>
          <Nav>
            <Button as={Link} to="/register" variant={location.pathname === '/register' ? 'light' : 'outline-light'} className="me-2">Register</Button>
            <Button as={Link} to="/login" variant={location.pathname === '/login' ? 'light' : 'outline-light'}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
=======
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">Home &nbsp; </Link>
          <Link to="/about">About &nbsp; </Link>
          <Link to="/login">Login &nbsp; </Link>
          <Link to="/register"> Register &nbsp; </Link>
          <Link to="/dashboard"> Dashboard &nbsp; </Link>
        </Nav>
      </Navbar.Collapse>
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf
    </Navbar>
  );
}

export default Header;
