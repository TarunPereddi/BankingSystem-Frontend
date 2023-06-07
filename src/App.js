import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomerList from './components/CustomerList';
import TransferHistory from './components/TransferHistory';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/transfers" element={<TransferHistory />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
