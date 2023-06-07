import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-4 fw-bold mb-4">Welcome to the Future of Banking</h1>
      <Link to="/customers">
        <button className="btn btn-outline-danger btn-lg border-4 fs-4">
          View all Customers
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
