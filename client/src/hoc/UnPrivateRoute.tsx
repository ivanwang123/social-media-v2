import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function UnPrivateRoute({ component: Component, ...rest }: any) {
  const authContext = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!authContext.me) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
}

export default UnPrivateRoute;
