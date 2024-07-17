import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roles }) => {
  const userRole = localStorage.getItem('role'); 


  if (roles.includes(userRole)) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
