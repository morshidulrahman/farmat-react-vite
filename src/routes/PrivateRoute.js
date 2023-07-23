import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/authSlice";
import { LoadingOverlay } from "@mantine/core";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const { authloading } = useSelector((state) => state.auth);

  if (authloading) {
    return <LoadingOverlay visible={authloading} />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
