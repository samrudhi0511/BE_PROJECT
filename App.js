import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FraudForm from "./components/FraudForm";
import Dashboard from "./components/DashBoard";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Fraud Detection</Link> |{" "}
        <Link to="/dashboard">Admin Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FraudForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
