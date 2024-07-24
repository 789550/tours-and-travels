
import React from "react";
import { Card, Form, InputGroup, Button } from 'react-bootstrap';
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
            <Card style={{ width: '25rem', margin: 'auto', marginTop: '2rem' }} className="register-card">
                {this.props.user && <Navigate to="/login" />}
                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Enter Your Details</Card.Subtitle>
                    <Form>
                        <Form.Group className="mb-3" controlId="registerForm.fname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Sudipto" onChange={this.handleChange} value={this.state.fName} name="fName" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerForm.lname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Dutta" onChange={this.handleChange} name="lName" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerForm.email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="duttasudipto11@gmail.com" onChange={this.handleChange} name="email" />
                        </Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>+91</InputGroup.Text>
                            <Form.Control id="inlineFormInputGroup" placeholder="7449550732" onChange={this.handleChange} name="phone" />
                        </InputGroup>
                        <Form.Group className="mb-3" controlId="registerForm.password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Your Password" onChange={this.handleChange} name="password" />
                        </Form.Group>
                        <Button variant="primary" onClick={this.handelSubmit}>Register</Button>
                    </Form>
                    <Card.Text>Already have an account? <Link to="/login">Login</Link></Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

const mapDispatchToProps = { register };
export default connect(mapStateToProps, mapDispatchToProps)(Register);