import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth.jsx';


function ProtectRoute({ children }) {
    // children represents the components or elements that are wrapped by the ProtectRoute component.
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}


// protected route means that certain routes or pages within an application are restricted and can only be accessed by authorized users. typically, this involves checking if a user is authenticated (logged in) before allowing access to specific routes. if the user is not authenticated, they are usually redirected to a login page or shown an error message. protected routes are commonly used in applications that require user authentication to ensure that sensitive information or functionalities are only accessible to authorized users.
export default ProtectRoute;