import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const LogIn = () => {
  const [error, setError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address : </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password : </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                ref={passwordRef}
                required={true}
              />
            </Form.Group>
            <Button type="submit" className="w-100">
              Log In
            </Button>
          </Form>
          <div className="text-center w-100 mt-4">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-3">
        Need an account?<Link to="/signup"> Sign up</Link>
      </div>
    </>
  );
};

export default LogIn;
