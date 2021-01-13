import { Container } from "react-bootstrap";

import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import { Route, BrowserRouter, Switch } from "react-router-dom";

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
            </AuthProvider>
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default App;
