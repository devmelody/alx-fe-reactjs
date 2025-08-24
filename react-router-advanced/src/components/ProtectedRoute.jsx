import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = false; // change to true to allow access

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
