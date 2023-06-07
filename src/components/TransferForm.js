import React, { useState } from 'react';

function TransferForm({ sender, customers, onTransfer }) {
  const [receiverId, setReceiverId] = useState('');
  const [amount, setAmount] = useState(0);

  const handleReceiverChange = (event) => {
    setReceiverId(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the receiver is the same as the sender
    if (receiverId === sender._id) {
      alert('Cannot transfer money to yourself');
      return;
    }

    onTransfer(sender._id, receiverId, amount);
    setReceiverId('');
    setAmount(0);
  };

  return (
    <div style={{ maxHeight: '500px', width: '40em', margin: '0 auto' }}>
      <h3 className="mb-3">Transfer Money</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="receiver" className="form-label">
            Receiver:
          </label>
          <select
            id="receiver"
            className="form-select"
            value={receiverId}
            onChange={handleReceiverChange}
          >
            <option value="" disabled>
              Select a receiver
            </option>
            {customers.map((customer) => (
              <option key={customer._id} value={customer._id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Transfer</button>
      </form>
    </div>
  );
}

export default TransferForm;
