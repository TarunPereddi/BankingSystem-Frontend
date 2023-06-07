import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1 className="navbar-title display-4">transfersss</h1>
        </Link>
        <div className="navbar-left">
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <Link to="/" className="nav-link px-3">
                <span className="text-lg">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customers" className="nav-link px-3">
                <span className="text-lg">Customer List</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/transfers" className="nav-link px-3">
                <span className="text-lg">Transfer History</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
