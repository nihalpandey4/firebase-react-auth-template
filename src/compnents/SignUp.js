import React from "react"
import {Card,Form,Button} from "react-bootstrap";

const SignUp  = () =>{
    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email Address : </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>New Password : </Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password : </Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" />
                        </Form.Group>
                        <Button type="submit" className="w-100">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center w-100 mt-3">
                    Already have an account? Log In
            </div>
        </>
    )
}

export default SignUp;