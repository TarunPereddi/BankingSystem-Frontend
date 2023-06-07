import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TransferForm from './TransferForm';
import { Link } from 'react-router-dom';

function CustomerDetails({ customer, customers }) {
  const [balance, setBalance] = useState(customer.balance);

  useEffect(() => {
    setBalance(customer.balance);
  }, [customer.balance]);

  const handleTransfer = (senderId, receiverId, amount) => {
    fetch('https://banking-eqtt.onrender.com/api/customers/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderId,
        receiverId,
        amount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response from the backend

        // Update the balance after successful transfer
        setBalance(balance - amount);

        // Show a toast notification for successful transaction
        toast.success('Transaction Successful!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Auto close the notification after 3 seconds
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occurred during the transfer
      });
  };

  return (
    <div >
      <h2 className="fw-bold mt-3 mb-4">Customer Details</h2>
      <div className="container" >
        <div className="bg-white p-4 rounded">
          <h3 className="fw-bold">{customer.name}</h3>
          <p className="fs-5">Email: {customer.email}</p>
          <p className="fs-5">Balance: {balance}</p>
          <TransferForm sender={customer} customers={customers} onTransfer={handleTransfer} />
          <Link to="/transfers">View Transfer History</Link>
        </div>
      </div>

      <ToastContainer /> {/* Add ToastContainer to the component */}
    </div>
  );
}

export default CustomerDetails;
