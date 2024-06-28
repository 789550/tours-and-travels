// import { useState } from "react";
// import { Button, Card, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import storageHandler from "../../helper/storageHandler.js";


// const Login = () => {
//     const [email, setEmail] = useState("")
//     // const [timer, setTimer] = useState(0)
//     const navigate = useNavigate();
   

//     const goTo = (page) => {
//         navigate(page)
//     }

//     const handelLogin = (e) => {
//         e.preventDefault();

//         navigate(`/dashboard`);
//         storageHandler.setLocalData({ email });
//     }

//     return <Card style={{ width: '25rem' }}>
//         {/* {console.log("Render calling...")} */}
//         <Card.Body>
//             <Card.Title>Login</Card.Title><span></span>
//             <Card.Subtitle className="mb-2 text-muted">Enter Your Details</Card.Subtitle>
//             <Form onSubmit={handelLogin}>
//                 <Form.Group className="mb-3" controlId="loginForm.email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="loginForm.password">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Your password" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">Login</Button>
//             </Form>
//             <Card.Text>Don not have an account? <span onClick={() => goTo("/register")}>Register</span></Card.Text>

//         </Card.Body>
//     </Card>
// }
// export default Login;




import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import storageHandler from "../../helper/storageHandler";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  // Add state for password if needed
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    storageHandler.setLocalData({ email });
    navigate("/dashboard");
  };

  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Enter Your Details</Card.Subtitle>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="loginForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
        <Card.Text>
          Don not have an account? <span onClick={() => navigate("/register")}>Register</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Login;
