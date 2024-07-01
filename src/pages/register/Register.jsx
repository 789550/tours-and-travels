import { useState } from "react";
import { Button, Card, InputGroup, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log("Registering with details:", { firstName, lastName, email, phone });
    navigate("/login");
  };

  return (
    <Card style={{ width: '25rem', margin: 'auto', marginTop: '2rem' }}>
      <Card.Body>
        <Card.Title>Register</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Enter Your Details</Card.Subtitle>
        <Form>
          <Form.Group className="mb-3" controlId="registerForm.firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerForm.lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="registerForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="duttasudipto11@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="registerForm.phone"> */}
            <Form.Label>Phone</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text className="std">+91</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="7449550732"
              onChange={(e) => setPhone(e.target.value)}
            />
            </InputGroup>
          {/* </Form.Group> */}
          <Button variant="primary" onClick={handleRegister}>
            Register
          </Button>
        </Form>
        <Card.Text>Already have an account? <Link to="/login">Login</Link></Card.Text>
      </Card.Body>
    </Card>
  );
};

Register.propTypes = {
  setRegistrationDone: PropTypes.func,
};

export default Register;
