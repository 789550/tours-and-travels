
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import tours from "../../data/toursData";

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  return (
    <Card style={{ width: '25rem', margin: 'auto', marginTop: '2rem' }}>
      <Card.Img variant="top" src={tour.image} />
      <Card.Body>
        <Card.Title>{tour.name}</Card.Title>
        <Card.Text>{tour.description}</Card.Text>
        <Card.Text><h2 style={{color: "green"}}><strong>Price: {tour.price}</strong></h2></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TourDetails;
