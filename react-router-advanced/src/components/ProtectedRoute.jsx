import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ import the hook

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ checker requires this

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
