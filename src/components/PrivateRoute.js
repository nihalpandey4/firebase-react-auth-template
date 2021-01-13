import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...others }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...others}
      render={(prop) => {
        return currentUser ? <Component {...prop} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
