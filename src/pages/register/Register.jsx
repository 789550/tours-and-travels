import React from "react";
import { Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from "react-router-dom";
import { register } from "../../reduxStore/authSlice";
import { connect } from "react-redux";
import registerImage from "../../assets/register.jpg"; 

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phone: "",
            firstName: "",
            lastName: "",
            password: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
        };
        this.props.register(newUser);
    }

    render() {
        return (
            <div className="register-container" style={{ margin: 'auto', marginTop: '2rem', maxWidth: '100%', padding: '1rem' }}>
                {this.props.user && <Navigate to="/login" />}
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <h2>Register</h2>
                        <p>Enter Your Details</p>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="registerForm.firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Sudipto" 
                                    onChange={this.handleChange} 
                                    value={this.state.firstName} 
                                    name="firstName" 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="registerForm.lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Dutta" 
                                    onChange={this.handleChange} 
                                    value={this.state.lastName} 
                                    name="lastName" 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="registerForm.email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="duttasudipto11@gmail.com" 
                                    onChange={this.handleChange} 
                                    value={this.state.email} 
                                    name="email" 
                                    required 
                                />
                            </Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>+91</InputGroup.Text>
                                <Form.Control 
                                    id="inlineFormInputGroup" 
                                    placeholder="7449550732" 
                                    onChange={this.handleChange} 
                                    value={this.state.phone} 
                                    name="phone" 
                                    required 
                                />
                            </InputGroup>
                            <Form.Group className="mb-3" controlId="registerForm.password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Your Password" 
                                    onChange={this.handleChange} 
                                    value={this.state.password} 
                                    name="password" 
                                    required 
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="register-button" style={{ width: '100%' }}>Register</Button>
                        </Form>
                        <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
                    </Col>
                    <Col xs={12} md={6} className="mt-3 mt-md-0">
                        <img src={registerImage} alt="Register" style={{ width: '100%', height: 'auto' }} />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

const mapDispatchToProps = { register };
export default connect(mapStateToProps, mapDispatchToProps)(Register);
