
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import InternationalDashboard from "@/components/InternationalDashboard";

const DashboardHome = () => {
  const { user, signOut } = useAuth();

  return <InternationalDashboard />;
};

export default DashboardHome;
