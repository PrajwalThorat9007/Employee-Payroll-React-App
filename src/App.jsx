import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/add" />} />
          <Route path="/add" element={<PayrollForm />} />
          {/* We will add Home and Edit routes in later UCs */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
