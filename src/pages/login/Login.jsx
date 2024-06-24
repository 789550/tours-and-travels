import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Login = ({ showToast }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = () => {
    console.log("Logging in with email:", email);
    //navigate(`/dashboard/${encodeURIComponent(email)}`);
    navigate(`/dashboard/${email}`);
    showToast("Successfully logged in!");
  };

  return (
    <Card style={{ width: '25rem', margin: 'auto', marginTop: '2rem' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Enter Your Details</Card.Subtitle>
        <Form>
          <Form.Group className="mb-3" controlId="loginForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Your password" />
          </Form.Group>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Form>
        <Card.Text>
          Don’t have an account? <Link to="/register">Register</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Login.propTypes = {
  showToast: PropTypes.func.isRequired,
};

export default Login;
