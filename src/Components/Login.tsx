import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Services/firebase";
import { validateLoginForm } from "../Services/helper";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { isLoggedIn, setIsLoggedIn } = useContext(Context);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const error = validateLoginForm({ email, password });
      if (error) {
        setError(error);
        removeValidationMessage();
        return;
      }
      const userCredential: any = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("accessToken", userCredential.user.accessToken);
      dispatch({ type: "LOGIN" });
      navigate("/expense");
    } catch (error) {
      console.log(error);
    }
  };

  const removeValidationMessage = () => {
    setTimeout(() => {
      setError("");
    }, 1000);
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form
            onSubmit={handleSubmit}
            className="border p-4 rounded"
            style={{ minWidth: "300px" }}
          >
            <h2 className="text-center mb-4">Login</h2>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Login
            </Button>
            Have an account? <Link to="/signup">Sign up</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
