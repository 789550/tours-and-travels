import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import './Home.css';
import germany from "../../assets/germany.jpeg";
import london from "../../assets/London.webp";
import relax from "../../assets/relax and unwind.jpeg";
import home1 from "../../assets/home1.jpg";
import vizag from "../../assets/vizag.jpg";
import home3 from "../../assets/home3.jpg";


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <Container>
          <Row>
            <Col>
              <Carousel className="home-carousel">
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={germany}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Explore Exotic Destinations</h3>
                    <p>Discover the beauty of the world with our exclusive tours.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={london}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Adventure Awaits</h3>
                    <p>Experience thrilling adventures around the globe.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src={relax}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Relax and Unwind</h3>
                    <p>Find peace and tranquility with our relaxation packages.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Link to="/tours">
                <Button variant="primary" className="explore-button">Explore Tours</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="home-services">
        <Container>
          <Row>
            <Col>
              <h2>Our Services</h2>
              <p>We offer a variety of services to make your travel experience unforgettable.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={home1} />
                <Card.Body>
                  <Card.Title>Adventure Tours</Card.Title>
                  <Card.Text>Experience thrilling adventures around the world.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={vizag} />
                <Card.Body>
                  <Card.Title>Relaxation Packages</Card.Title>
                  <Card.Text>Relax and unwind with our exclusive relaxation packages.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={home3} />
                <Card.Body>
                  <Card.Title>Cultural Experiences</Card.Title>
                  <Card.Text>Immerse yourself in the rich cultures around the world.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-testimonials">
        <Container>
          <Row>
            <Col>
              <h2>What Our Customers Say</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Text>"Amazing experience! Highly recommended."</Card.Text>
                  <Card.Footer>John Doe</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Text>"A truly unforgettable journey. Will travel again."</Card.Text>
                  <Card.Footer>Jane Smith</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Text>"Great service and beautiful destinations."</Card.Text>
                  <Card.Footer>Emily Johnson</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="home-footer">
        <Container>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>Have questions? Get in touch with us.</p>
              <Link to="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
              <div className="social-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
