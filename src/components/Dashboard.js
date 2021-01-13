import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import {useAuth} from "../contexts/AuthContext"

const Dashboard = () => {
    const {currentUser} = useAuth()
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-3">Dashboard</h2>
          <strong>Email : </strong> {currentUser && currentUser.email}
          <div className="text-center w-100 mt-3">
            <Link className="w-100 btn btn-lg btn-info"> Update profile</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-3">
        <Button variant="link"> Log Out</Button>
      </div>
    </>
  );
};

export default Dashboard;
