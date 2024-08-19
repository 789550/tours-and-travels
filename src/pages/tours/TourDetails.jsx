import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Carousel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reduxStore/cartSlice";
import tours from "../../data/toursData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const TourDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(tour));
    navigate("/cart");
  };

<<<<<<< HEAD
  // Define intervals for each carousel item
  const carouselIntervals = [1000, 1000, 1000, 1000, 1000]; // Custom intervals for each image

  return (
    <div style={{ width: '80%', margin: 'auto', marginTop: '2rem' }} className="bg-dark details-top">
=======
  const carouselIntervals = [1000, 1000, 1000, 1000, 1000]; 

  return (
    <div style={{ width: '80%', margin: 'auto', marginTop: '60px' }} className="bg-dark details-top">     {/* marginTop: '2rem' */}
>>>>>>> redux
      <h3 className="tour-name-heading">{tour.name} in Pictures</h3>
      <Carousel>
        {tour.images.map((image, index) => (
          <Carousel.Item key={index} interval={carouselIntervals[index] || 1000}>
            <img
<<<<<<< HEAD
              className="d-block w-100 carousel-image" // Add class name for custom styling
=======
              className="d-block w-100 carousel-image" 
>>>>>>> redux
              src={image}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
<<<<<<< HEAD
      <Card.Body>
=======
      <Card.Body style={{paddingLeft:'15px'}}>
>>>>>>> redux
        <Card.Title className="tour-name">{tour.name}</Card.Title>
        <Card.Text className="tour-description">{tour.description}</Card.Text>
       
      </Card.Body>
      {/* <div className="tour-overview" style={{ marginTop: '1rem' }}> */}
      <div className="tour-overview">
        <h3 className="tour-overview-heading">Quick Tour Overview</h3>
        <ul className="text-warning tour-plans">
          {tour.tourPlan.map((plan, index) => (
            <li key={index}>
              <strong className="text-warning">Day {plan.day}:</strong> {plan.activities}
            </li>
          ))}
        </ul>
      </div>
      <Button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </Button>
    </div>
  );
};

export default TourDetails;
