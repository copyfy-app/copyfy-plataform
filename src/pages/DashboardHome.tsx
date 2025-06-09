
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Dashboard from "@/components/Dashboard";

const DashboardHome = () => {
  const { user, signOut } = useAuth();

  return <Dashboard />;
};

export default DashboardHome;
