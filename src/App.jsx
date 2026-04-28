import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<PayrollForm />} />
          <Route path="/edit/:id" element={<PayrollForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
