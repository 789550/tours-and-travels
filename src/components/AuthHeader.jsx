import { Container, Nav, Navbar, Button, Badge, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/wanderlust3.png'; 

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
        <Navbar.Brand href="#home" style={{ fontFamily: 'serif' }}>
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
            <Link to="/cart" className={`nav-link ${isActive('/cart')}`} style={{ position: 'relative' }}>
              {itemCount > 0 && (
                <Badge pill bg="danger" className="cart-badge">
                  {itemCount}
                </Badge>
              )}
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </Link>
          </Nav>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                {user?.email}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item as={Link} to="/checkout">Orders</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant='outline-light' onClick={logout} style={{ marginLeft: '10px' }}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthHeader;