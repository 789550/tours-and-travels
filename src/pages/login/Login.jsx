import { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import storageHandler from "../../helper/storageHandler";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reduxStore/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useOutletContext();
  const dispatch = useDispatch();
  const isLogedin = useSelector((state) => state.auth.isLogedin);

  useEffect(() => {
    if (isLogedin) {
      navigate("/dashboard");
    }
  }, [isLogedin, navigate]);

  const handleLogin =  (e) => {
    e.preventDefault();
    storageHandler.setLocalData({ email });
    setUser({ email });
    const dispatcher = dispatch(login({ email, password }));
    console.log(dispatcher);
  };


  return (
    <Card style={{ width: '25rem', margin: 'auto', marginTop: '2rem' }} className="login-card">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Enter Your Details</Card.Subtitle>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="loginForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="duttasudipto11@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
        <Card.Text>Don not have an account? <Link to="/register">Register</Link></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Login;


  // const dispatcher = await dispatch(login({ email, password })).unwrap();
  // console.log("dispatcher", dispatcher);
  //.unwrap() only in case of async function, thunk in case of api
  // shortcut for muliple selecting any thing usng control+D