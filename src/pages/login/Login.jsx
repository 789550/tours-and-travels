
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reduxStore/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        navigate("/dashboard");
    };

    return (
        <div style={{ width: '25rem', margin: 'auto', marginTop: '2rem' }} className="login-container">
            <h2>Login</h2>
            <p>Enter Your Details</p>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="loginForm.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="duttasudipto11@gmail.com" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginForm.password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Your password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        required 
                    />
                </Form.Group>
                <Button className="login-button" type="submit">Login</Button>
            </Form>
            <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
            <p>----------------------------Or-------------------------------</p>
            <a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer">
            <Button variant="light" className="mb-3">
                <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '0.5rem' }} />
                Sign in with Google
            </Button>
            </a>
        </div>
    );
};

export default Login;
