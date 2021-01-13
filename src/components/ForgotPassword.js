import React,{useState,useRef} from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link} from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailRef.current.value);
      setSuccessMessage("Reset link sent to your Email");
      setErrorMessage();
    } catch (error) {
      setSuccessMessage();
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address : </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
              />
            </Form.Group>
            <Button type="submit" className="w-100">
              Send Link
            </Button>
          </Form>
          <div className="text-center w-100 mt-4">
            Go back to <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-3">
        Need an account?<Link to="/signup"> Sign up</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
