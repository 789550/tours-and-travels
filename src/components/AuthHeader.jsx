
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthHeader = ({ user, logout }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar auth-header">
      <Container>
        <Navbar.Brand href="#home">Tours & Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about">About &nbsp; </Link>
            <Link to="/dashboard">Dashboard &nbsp; </Link>
            <Link to="/tours">Tours &nbsp; </Link>
          </Nav>
          <Nav>
            <Link to="/dashboard" className="email">{user?.email} &nbsp; </Link>
            <Button onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AuthHeader;
