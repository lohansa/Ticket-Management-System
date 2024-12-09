import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isVendor }) => {
  const isLoggedIn = true; // Replace with actual login check
  const role = isVendor ? "vendor" : "customer";

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (isVendor && role !== "vendor") {
    return <Navigate to="/customer-dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
