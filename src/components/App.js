import { Container } from "react-bootstrap";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import LogIn from "./LogIn";

const App = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <Switch>
            <AuthProvider>
              <Route path="/signup" component={SignUp}/>
              <Route path="/login" component={LogIn}/>
            </AuthProvider>
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default App;
