import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AuthHeader from "../components/AuthHeader";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reduxStore/authSlice";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaGoogle, FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogedin = useSelector((state) => state.auth.isLogedin);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {isLogedin ? <AuthHeader logout={handleLogout} /> : <Header />}
      <Outlet />
      <footer className="layout-footer bg-dark">
        <Container>
          <Row>
            <Col>
              <h2 style={{ fontFamily: 'serif', color: 'white'}}>Contact Us</h2>
              <p>Have questions? Get in touch with us.</p>
              <div style={{padding: '20px'}}>
              <Link to="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
              </div>
              <div className="social-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                  <FaFacebook />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                  <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github">
                  <FaGithub />
                </a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="google">
                  <FaGoogle />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="whatsapp">
                  <FaWhatsapp />
                </a>
              </div>
              <p>©Copyright 2024, Wanderlust</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
