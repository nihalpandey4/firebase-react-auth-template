import {Container} from "react-bootstrap"

import SignUp from "./SignUp"

const App=()=> {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"90vh"}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
        <SignUp/>
      </div>
    </Container>
  );
}

export default App;
