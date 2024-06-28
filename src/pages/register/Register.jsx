import React from "react";
import { Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fName: "",
            timer: 0
        };
    }

    componentDidMount() {
        console.log("First time...");
        // setInterval(() => {
        //     this.setState((currentValue) => {
        //         return { timer: currentValue.timer + 1 }
        //     })
        // }, 1000);
    }

    componentDidUpdate() {
        console.log("After update..");
    }

    componentWillUnmount() {
        console.log("Bye register...");
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {
        // console.log("render colling...");
        return <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>Register</Card.Title><span>{this.state.timer}</span>
                <Card.Subtitle className="mb-2 text-muted">Enter Your Details</Card.Subtitle>
                <Form>
                    <Form.Group className="mb-3" controlId="registerForm.fname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Ramen" onChange={this.handleChange} value={this.state.fName} name="fName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registerForm.lname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Kundu" onChange={this.handleChange} name="lName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registerForm.email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={this.handleChange} name="email" />
                    </Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>+91</InputGroup.Text>
                        <Form.Control id="inlineFormInputGroup" placeholder="9812345670" onChange={this.handleChange} name="password" />
                    </InputGroup>
                    <Button variant="primary">Register</Button>
                </Form>
                <Card.Text>Already have an account? <Link to="/login">Login</Link></Card.Text>

            </Card.Body>
        </Card>
    }
}

export default Register;