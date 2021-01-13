import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const UpdateProfile = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match");
      return;
    }
    setError();
    setLoading(true);
    const promises = [];
    if (currentUser.email !== emailRef.current.value) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/");
        return;
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      })
      setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address : </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
                defaultValue= {currentUser.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>New Password : </Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave blank to not change password"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password : </Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave blank to not change password"
                ref={confirmPasswordRef}
              />
            </Form.Group>
            <Button type="submit" disabled={loading} className="w-100">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-3">
        <Link className="btn btn-lg btn-danger w-100" to="/"> Cancel </Link>
      </div>
    </>
  );
};

export default UpdateProfile;
