import React, { useEffect, useState } from 'react';

function TransferHistory() {
  const [transferHistory, setTransferHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://banking-eqtt.onrender.com/api/transfers')
      .then((response) => response.json())
      .then((data) => {
        setTransferHistory(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading transfer history...</p>;
  }

  const reversedHistory = [...transferHistory].reverse();

  return (
    <div>
      <h2 className="fw-bold mt-3 mb-4">Transfer History</h2>
      <div className="overflow-auto custom-scrollbar" style={{ maxHeight: '500px', width: '50em', margin: '0 auto' }}>
        <div className="list-group">
          {reversedHistory.map((transfer) => (
            <div key={transfer._id} className="transfer-box list-group-item list-group-item-action">
              <p className="mb-1 fw-bold">Sender: {transfer.senderName}</p>
              <p className="mb-1 fw-bold">Receiver: {transfer.receiverName}</p>
              <p className="mb-1 fw-bold">Amount: {transfer.amount}</p>
              <p className="mb-1 fw-bold">Date: {transfer.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransferHistory;
