import React from 'react';
import { useLocation } from 'react-router-dom';
import './Transactions.css';

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions-container">
      <h1>Your Transactions</h1>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className="transaction-item">
              <p><strong>Transaction Hash:</strong> {transaction.hash}</p>
              <p><strong>Tour:</strong> {transaction.tourName}</p>
              <p><strong>Date:</strong> {transaction.selectedDate.city} on {transaction.selectedDate.date}</p>
              <p><strong>User Name:</strong> {transaction.userDetails.name}</p>
              <p><strong>Email:</strong> {transaction.userDetails.email}</p>
              <p><strong>Amount:</strong> {transaction.amount} ETH</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transactions;
