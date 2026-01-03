import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import AdminDashboard from "./admin/dashboard.jsx";
import CustomerDashboard from "./customer/dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  return (
    <div className="App">
     
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute role="admin">
          <AdminDashboard /></ProtectedRoute>} />
        <Route path="/customer/dashboard" element={<ProtectedRoute role="customer">
          <CustomerDashboard /></ProtectedRoute>} />
        </Routes>
    </div>
  );
}

export default App;