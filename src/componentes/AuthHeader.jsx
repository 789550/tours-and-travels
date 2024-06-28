// import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import storageHandler from "../helper/storageHandler";

// function AuthHeader() {
//     let navigate = useNavigate();
//     // const email = storageHandler.getLocalData();
    
//     function logout(){
//         storageHandler.removeLocalData()
//         navigate("/");
//     }
    

//     return <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//         <Container>
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                     {/* <Link to="/">Home &nbsp; </Link> */}
//                     <Link to="/about" >About &nbsp; </Link>
//                     {/* <Link to="/login" >Login &nbsp; </Link> */}
//                     {/* <Link to="/register" > Register &nbsp; </Link> */}
//                     <Link to="/dashboard" > Dashboard &nbsp; </Link>

//                 </Nav>
//                 <Nav>
//                     <Link to="/dashboard" > {email} &nbsp; </Link>
//                     <Button onClick={logout}> Logout </Button>
//                 </Nav>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar>
// }
// export default AuthHeader;



import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import storageHandler from "../helper/storageHandler";

const AuthHeader = ({ user, logout }) => {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about">About &nbsp; </Link>
            <Link to="/dashboard">Dashboard &nbsp; </Link>
          </Nav>
          <Nav>
            <span>{user.email} &nbsp; </span>
            <Button onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthHeader;
