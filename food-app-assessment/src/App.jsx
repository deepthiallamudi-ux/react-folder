import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import AdminDashboard from "./admin/dashboard.jsx";
import CustomerDashboard from "./customer/dashboard.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;