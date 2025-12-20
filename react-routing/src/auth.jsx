import React from 'react'

export const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by checking a token in localStorage)
  return localStorage.getItem("isloggedin")==="true";
};


