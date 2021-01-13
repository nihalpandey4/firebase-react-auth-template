import React,{useRef,useState} from "react"
import {Card,Form,Button,Alert} from "react-bootstrap";
import {Link} from "react-router-dom";

import {useAuth} from "../contexts/AuthContext";

const LogIn  = () =>{
    const [error,setError] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    const {logIn} = useAuth()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await logIn(emailRef.current.value,passwordRef.current.value);
            setError("")
        }
        catch{
            setError("Failed to Log In the user")
        }
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error&&<Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address : </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" ref= {emailRef} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>New Password : </Form.Label>
                            <Form.Control type="password" placeholder="Enter password" ref= {passwordRef} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password : </Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" ref= {confirmPasswordRef} />
                        </Form.Group>
                        <Button type="submit" className="w-100">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center w-100 mt-3">
                    Already have an account?<Link to="/login"> Log In </Link>
            </div>
        </>
    )
}

export default SignUp;