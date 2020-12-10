import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";
import { useSelector } from "react-redux";

const Admin = () => {
  let user = useSelector((s) => s.Auth);

  console.log(user);

  if (user.data.role == 21) {
    return <div>ini halaman admin</div>;
  } else return <Route render={(props) => <Redirect to="/login" />} />;
};

export default Admin;
