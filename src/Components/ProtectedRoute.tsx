// src/components/ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "../Services/firebase";

const ProtectedRoute = ({ element: Element, ...rest }: any) => {
  const currentUser = auth.currentUser;

  return (
    <Route
      {...rest}
      element={currentUser ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
