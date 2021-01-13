import { Container } from "react-bootstrap";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute"

const App = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/" exact component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default App;
