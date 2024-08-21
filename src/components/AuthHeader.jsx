<<<<<<< HEAD
import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
=======
<<<<<<< HEAD

import { Container, Nav, Navbar, Button } from "react-bootstrap";
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/wanderlust.png'; 

const AuthHeader = ({ logout }) => {
  const user = useSelector(state => state.auth.user);
  const cartItems = useSelector(state => state.cart.items); 
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const itemCount = cartItems.length; 

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark fixed-top bg-dark">
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
<<<<<<< HEAD
          <Nav className="mx-auto">
=======
          <Nav className="me-auto">
=======
import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/wanderlust.png'; 

const AuthHeader = ({ logout }) => {
  const user = useSelector(state => state.auth.user);
  const cartItems = useSelector(state => state.cart.items); 
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const itemCount = cartItems.length; 

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark fixed-top bg-dark">
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
>>>>>>> redux
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
            <Link to="/tours" className={`nav-link ${isActive('/tours')}`}>Tours</Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Link to="/cart" className={`nav-link ${isActive('/cart')}`}>
             <FontAwesomeIcon icon={faShoppingCart} /> Cart
=======
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf
            <Link to="/cart" className={`nav-link ${isActive('/cart')}`} style={{ position: 'relative' }}>
              {itemCount > 0 && (
                <Badge pill bg="danger" className="cart-badge">
                  {itemCount}
                </Badge>
              )}
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
<<<<<<< HEAD
=======
>>>>>>> redux
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf
            </Link>
          </Nav>
          <Nav>
            <Link to="/dashboard" className={`nav-link email ${isActive('/dashboard')}`}>{user?.email}</Link>
            <Button onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthHeader;

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default AuthHeader;
=======
export default AuthHeader;

>>>>>>> redux
>>>>>>> 3f1499ef25fef74babefb697711e98a03221beaf
