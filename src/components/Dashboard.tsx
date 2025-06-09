
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Redirect to the new dashboard page
  React.useEffect(() => {
    navigate('/dashboard');
  }, [navigate]);

  return null;
};

export default Dashboard;
