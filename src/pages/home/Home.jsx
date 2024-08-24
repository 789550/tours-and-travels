import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMountain, FaUmbrellaBeach, FaLandmark, FaBus } from 'react-icons/fa'; 
import './Home.css';
import germany from "../../assets/germany.jpeg";
import london from "../../assets/London.webp";
import relax from "../../assets/relax and unwind.jpeg";
import home1 from "../../assets/home1.jpg";
import vizag from "../../assets/vizag.jpg";
import home3 from "../../assets/home3.jpg";
import cityPhoto from "../../assets/home4.jpg";
import naturePhoto from "../../assets/home5.jpg";
import luxuryPhoto from "../../assets/home6.jpg";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <Container>
          <Row>
            <Col>
              <Carousel className="home-carousel">
                <Carousel.Item interval={5000}>
                  <img className="d-block w-100" src={germany} alt="First slide" />
                  <Carousel.Caption>
                    <h3>Explore Exotic Destinations</h3>
                    <p>Discover the beauty of the world with our exclusive tours.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img className="d-block w-100" src={london} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Adventure Awaits</h3>
                    <p>Experience thrilling adventures around the globe.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img className="d-block w-100" src={relax} alt="Third slide" />
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
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Adventure Tours</Card.Title>
                  <Card.Text>Experience thrilling adventures around the world.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={vizag} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Relaxation Packages</Card.Title>
                  <Card.Text>Relax and unwind with our exclusive relaxation packages.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={home3} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Cultural Experiences</Card.Title>
                  <Card.Text>Immerse yourself in the rich cultures around the world.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* New Service Cards */}
          <Row style={{ marginTop: "30px" }}>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={cityPhoto} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>City Escapes</Card.Title>
                  <Card.Text>Discover the vibrant life of bustling cities.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={naturePhoto} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Nature Escapes</Card.Title>
                  <Card.Text>Reconnect with nature through our scenic nature escapes.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={luxuryPhoto} />
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>Luxury Travel</Card.Title>
                  <Card.Text>Indulge in opulent travel experiences with our luxury packages.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h2 style={{ marginTop: "60px" }}>Key Features</h2>
          <p>Discover the perfect getaway where majestic mountains, pristine beaches, iconic landmarks, and seamless transport come together for an unforgettable adventure.</p>


          <Row className="additional-services">
            <Col md={3}>
              <div className="service-icon">
                <FaMountain className="icon" />
                <h4>Mountains</h4>
                <p>Thrilling adventure tours tailored for adrenaline seekers.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-icon">
                <FaUmbrellaBeach className="icon" />
                <h4>Beach</h4>
                <p>Relax on beautiful beaches with our beach vacation packages.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-icon">
                <FaLandmark className="icon" />
                <h4>Landmarks</h4>
                <p>Discover cultural heritage and traditions around the world.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-icon">
                <FaBus className="icon" />
                <h4>Transport</h4>
                <p>Reliable and comfortable transport services for you.</p>
              </div>
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
                <Card.Body className="bg-dark text-warning">
                  <Card.Text>"Amazing experience! Highly recommended."</Card.Text>
                  <Card.Footer>John Doe</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body className="bg-dark text-warning">
                  <Card.Text>"A truly unforgettable journey. Will travel again."</Card.Text>
                  <Card.Footer>Jane Smith</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body className="bg-dark text-warning">
                  <Card.Text>"Great service and beautiful destinations."</Card.Text>
                  <Card.Footer>Emily Johnson</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;