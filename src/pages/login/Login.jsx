import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reduxStore/authSlice";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginImage from "../../assets/login1.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        navigate("/dashboard");
    };

    return (
        <div className="login-container" style={{ margin: 'auto', marginTop: '2rem', padding: '1rem', marginLeft: '50px' }}>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h2>Login</h2>
                    <p>Enter Your Details</p>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="loginForm.email">
                            <Form.Label>Email<sup className='text-black-200'>*</sup></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="duttasudipto11@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="loginForm.password">
                            <Form.Label>Password<sup className='text-black-200'>*</sup></Form.Label>
                            <div className="position-relative">
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                <span
                                    className="position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    style={{ zIndex: 1 }}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                                    )}
                                </span>
                            </div>
                        </Form.Group>
                        <Button className="login-button" type="submit" style={{ width: '100%' }}>Login</Button>
                    </Form>
                    <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
                    <Container>
                        <Row className="my-4 d-flex align-items-center justify-content-center">
                            <Col xs={5} className="p-0">
                                <hr className="bg-richblack-700" style={{ height: '1px' }} />
                            </Col>
                            <Col xs="auto" className="text-richblack-700 font-medium fs-5">
                                OR
                            </Col>
                            <Col xs={5} className="p-0">
                                <hr className="bg-richblack-700" style={{ height: '1px' }} />
                            </Col>
                        </Row>
                    </Container>
                    <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1" target="_blank" rel="noopener noreferrer">
                        <Button variant="light" className="mb-3" style={{ width: '100%', borderRadius: '15px' }}>
                            <FcGoogle style={{ marginRight: '0.5rem' }} />
                            Sign in with Google
                        </Button>
                    </a>
                </Col>
                <Col xs={12} md={6} className="mt-3 mt-md-0">
                    <img src={loginImage} alt="Login" style={{ width: '100%', height: 'auto' }} />
                </Col>
            </Row>
        </div>
    );
};

export default Login;

