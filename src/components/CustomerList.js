import React, { useEffect, useState } from 'react';
import CustomerDetails from './CustomerDetails';
import './custom.css';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://banking-eqtt.onrender.com/api/customers')
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (selectedCustomer) {
    return (
      <div className="container">
        <button onClick={() => setSelectedCustomer(null)} className="btn btn-primary mb-3">Go Back</button>
        <CustomerDetails customer={selectedCustomer} customers={customers} />
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-4">Customer List</h2>
      <div className="overflow-auto custom-scrollbar" style={{ maxHeight: '500px', width: '50em', margin: '0 auto' }}>
        <div className="list-group">
          {customers.map((customer) => (
            <div
              key={customer._id}
              onClick={() => setSelectedCustomer(customer)}
              className="list-group-item list-group-item-action"
            >
              <h3 className="mb-1">{customer.name}</h3>
              <p className="mb-1">Email: {customer.email}</p>
              <p className="mb-1">Balance: {customer.balance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
