import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TicketConfirmation.css';

const TicketConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { transactionHash, account, selectedDate, userDetails, tourName, tourImageUrl } = location.state || {};

  if (!transactionHash || !account || !userDetails || !tourName || !tourImageUrl) {
    return <div>No ticket details found. Please complete your purchase.</div>;
  }

  return (
    <div className="ticket-confirmation-container">
      <div className="ticket-card">
        <img src={tourImageUrl} alt={tourName} className="ticket-image" />
        <div className="ticket-content">
          <h1>{tourName}</h1>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Date:</strong> {selectedDate.city} on {selectedDate.date}</p>
          <p><strong>Transaction ID:</strong> {transactionHash}</p>
          <p><strong>Wallet Address:</strong> {account}</p>

          <button onClick={() => window.print()} className="print-ticket-btn">Print Ticket</button>
          <button onClick={() => navigate('/')} className="back-home-btn">Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
