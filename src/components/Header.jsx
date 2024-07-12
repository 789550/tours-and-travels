import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Tours & Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home &nbsp; </Link>
            <Link to="/about">About &nbsp; </Link>
            <Link to="/login">Login &nbsp; </Link>
            <Link to="/register">Register &nbsp; </Link>
            <Link to="/dashboard">Dashboard &nbsp; </Link>
            <Link to="/tours">Tours &nbsp; </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
