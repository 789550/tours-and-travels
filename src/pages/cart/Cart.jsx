import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Row, Col } from "react-bootstrap";
import { removeFromCart } from "../../reduxStore/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{ fontSize: '22px' }}>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} style={{ width: '25rem', margin: 'auto', marginTop: '2rem' }}>
            <Card.Img variant="top" src={item.images[0]} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Row>
                <Col>
                  <Card.Text>
                    <h4 style={{ color: "green" }}><strong>Price: {item.price}</strong></h4>
                  </Card.Text>
                </Col>
                <Col xs="auto">
                  <Button 
                    className="remove-from-cart" 
                    onClick={() => handleRemoveFromCart(item.id)}
                    variant="danger"
                  >
                    Remove from cart <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cart;
