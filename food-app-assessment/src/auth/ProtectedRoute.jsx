import {Navigate} from 'react-router-dom';
import React from 'react';

function ProtectedRoute({children, role}) {
    const userRole = localStorage.getItem("role");
    
    // If no user is logged in, redirect to login page
    if (!userRole) {
        return <Navigate to="/" replace />;
    }
    
    // If user role doesn't match required role, redirect to login page
    if (userRole !== role) {
        alert("Access Denied! You don't have permission to access this page.");
        return <Navigate to="/" replace />;
    }
    
    // If everything is fine, render the children
    return children;
}

export default ProtectedRoute;