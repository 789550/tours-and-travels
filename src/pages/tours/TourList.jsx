<<<<<<< HEAD

=======
>>>>>>> redux
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tours from '../../data/toursData';

const TourList = () => {
  return (
<<<<<<< HEAD
    <div className="tour-list">
=======
    <div className="tour-list" style={{marginTop:'70px'}}>
>>>>>>> redux
      <h1 className="tour-list-heading">Explore Our Exciting Tours</h1>
      <p className="tour-list-caption">Discover the world with our exclusive tour packages. Whether you're looking for adventure, relaxation, or cultural experiences, we have the perfect tour for you.</p>
      <div className="card-container">
        {tours.map(tour => (
          <Card key={tour.id} className="card">
            <Card.Img variant="top" src={tour.images[0]} />
            <Card.Body>
              <Card.Title>{tour.name}</Card.Title>
              <Card.Text>{tour.description}</Card.Text>
              <div className="tour-details">
                <Card.Text><span style={{ color: "green" }} className="tour-price">Price: {tour.price}</span></Card.Text>
                <Link to={`/tours/${tour.id}`}>
                  <div className="view-details-button">   
                    <FontAwesomeIcon icon={faEye} style={{ marginRight: '0.5em' }} />
                    View Details
                  </div>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TourList;
