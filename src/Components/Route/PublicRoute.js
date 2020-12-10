import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

  let { isLogin } = useSelector((state) => state.Auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
