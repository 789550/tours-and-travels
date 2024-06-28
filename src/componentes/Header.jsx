// import { Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Header = () => {
//     return <Navbar expand="lg" className="bg-body-tertiary">
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//                 <Link to="/">Home &nbsp; </Link>
//                 <Link to="/about">About &nbsp; </Link>
//                 <Link to="/login">Login &nbsp; </Link>
//                 <Link to="/register">Register &nbsp; </Link>
//                 <Link to="/dashboard">Dashboard &nbsp; </Link>
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
// }
// export default Header;




import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">Home &nbsp; </Link>
          <Link to="/about">About &nbsp; </Link>
          <Link to="/login">Login &nbsp; </Link>
          <Link to="/register">Register &nbsp; </Link>
          <Link to="/dashboard">Dashboard &nbsp; </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
