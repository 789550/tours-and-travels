import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthHeader = ({ user, logout }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar auth-header">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about">About &nbsp; </Link>
            <Link to="/dashboard"> Dashboard &nbsp; </Link>
          </Nav>
          <Nav>
            <span className="mail">{user?.email} &nbsp; </span>
            <Button onClick={logout}> Logout </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthHeader;
