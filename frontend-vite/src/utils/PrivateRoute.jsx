import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    toast.error('You must be logged in to access this page.');
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
