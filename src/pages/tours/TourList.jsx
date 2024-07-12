
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import tours from "../../data/toursData";

const TourList = () => {
  return (
      <div className="tour-list">
        <h1 className="tour-list-heading">Explore Our Exciting Tours</h1>
        <p className="tour-list-caption">Discover the world with our exclusive tour packages. Whether you're looking for adventure, relaxation, or cultural experiences, we have the perfect tour for you.</p>
        <div className="card-container">
          {tours.map(tour => (
            <Card key={tour.id} className="card">
              <Card.Img variant="top" src={tour.image} />
              <Card.Body>
                <Card.Title>{tour.name}</Card.Title>
                <Card.Text>{tour.description}</Card.Text>
                <Link to={`/tours/${tour.id}`}>
                  <Button variant="dark">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
  );
};

export default TourList;

