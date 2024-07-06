import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { auth } from "../Services/firebase";
import { validateSignUpForm } from "../Services/helper";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("checking auth, email, password ", auth, email, password);
      const error = validateSignUpForm({ email, password, confirmPassword });
      if (error) {
        setError(error);
        removeValidationMessage();
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setSuccess("Sign up is successfull");
      removeValidationMessage();
    } catch (err) {
      setError("User Already exist!");
      removeValidationMessage();
      console.log(err);
    }

    // console.log({ email, password, confirmPassword });
  };

  const removeValidationMessage = () => {
    setTimeout(() => {
      setSuccess("");
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
          {success && <p style={{ color: "green" }}>{success}</p>}
          <Form
            onSubmit={handleSubmit}
            className="border p-4 rounded"
            style={{ minWidth: "300px" }}
          >
            <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Sign Up
            </Button>
            Have an account? <a href="javascript:void(0)">Login</a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
