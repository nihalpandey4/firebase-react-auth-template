import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Card, Button,Alert } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
    const [errorMessage,setErrorMessage] = useState()
  const { currentUser,logout } = useAuth();
  const handleLogOut = async()=>{
    try{
        await logout();
        setErrorMessage();
    }
    catch(error){
        setErrorMessage(error.message);
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-3">Dashboard</h2>
          {errorMessage&&<Alert variant="danger">{errorMessage}</Alert>}
          <strong>Email : </strong> {currentUser && currentUser.email}
          <div className="text-center w-100 mt-3">
            <Link className="w-100 btn btn-lg btn-info" to="/update-profile">
              Update profile
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-3">
        <Button variant="link" onClick ={()=>handleLogOut()}> Log Out</Button>
      </div>
    </>
  );
};

export default Dashboard;
