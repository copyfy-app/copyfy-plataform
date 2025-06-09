
import React from "react";
import { Navigate } from "react-router-dom";

const DashboardHome = () => {
  // Redirect to the new dashboard route
  return <Navigate to="/dashboard" replace />;
};

export default DashboardHome;
