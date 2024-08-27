import React from "react";
import { Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from "react-router-dom";
import { register } from "../../reduxStore/authSlice";
import { connect } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import registerImage from "../../assets/register.png";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phone: "",
            firstName: "",
            lastName: "",
            password: "",
            showPassword: false 
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
        };
        this.props.register(newUser);
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    }

    render() {
        return (
            <div className="register-container" style={{ margin: 'auto', marginTop: '2rem', padding: '1rem', marginLeft: '50px' }}>
                {this.props.user && <Navigate to="/login" />}
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <h2>Register</h2>
                        <p>Enter Your Details</p>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="registerForm.firstName">
                                <Form.Label>First Name<sup className='text-black-200'>*</sup></Form.Label>
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
                                <Form.Label>Last Name<sup className='text-black-200'>*</sup></Form.Label>
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
                                <Form.Label>Email<sup className='text-black-200'>*</sup></Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="duttasudipto11@gmail.com" 
                                    onChange={this.handleChange} 
                                    value={this.state.email} 
                                    name="email" 
                                    required 
                                />
                            </Form.Group>
                            <Form.Label>Phone<sup className='text-black-200'>*</sup></Form.Label>
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
                                <Form.Label>Password<sup className='text-black-200'>*</sup></Form.Label>
                                <div className="position-relative">
                                    <Form.Control 
                                        type={this.state.showPassword ? "text" : "password"} 
                                        placeholder="Your Password" 
                                        onChange={this.handleChange} 
                                        value={this.state.password} 
                                        name="password" 
                                        required 
                                    />
                                    <span
                                        className="position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer"
                                        onClick={this.togglePasswordVisibility}
                                        style={{ zIndex: 1 }}
                                    >
                                        {this.state.showPassword ? (
                                            <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                                        ) : (
                                            <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                                        )}
                                    </span>
                                </div>
                            </Form.Group>
                            <Button type="submit" className="register-button" style={{ width: '100%' }}>Register</Button>
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
