import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import './TourDetails.css';

const topSellingTours = [
  {
    id: 1,
    name: "DIL-LUMINATI",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXhFGSyptI27e893pF-9MMCeSmM6WSH4zbg&s",
    description: "Experience the sensational Dil-Luminati concert, a night of lights and sound!",
    price: "0.05", // Ether amount for payment
    dates: [
      { city: "New York", date: "2024-10-12" },
      { city: "Los Angeles", date: "2024-11-05" },
      { city: "Chicago", date: "2024-12-01" }
    ]
  },
  // Additional tours...
];

const TourDetails = () => {
  const { id } = useParams();
  const tour = topSellingTours.find((tour) => tour.id === parseInt(id));
  const [selectedDate, setSelectedDate] = useState(tour.dates[0]);
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const [account, setAccount] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Automatically check if MetaMask is connected
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length) {
          setAccount(accounts[0]);
          setConnected(true);
        } else {
          setAccount(null);
          setConnected(false);
        }
      });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleDateChange = (event) => {
    const selected = tour.dates.find(date => date.date === event.target.value);
    setSelectedDate(selected);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error("MetaMask connection error: ", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to proceed.");
    }
  };

  const handleBuyTicket = async () => {
    if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length === 0) {
        alert("No account found. Please connect to MetaMask.");
        return;
    }

    try {
        const transactionResponse = await signer.sendTransaction({
            to: " 0x7ae5002b5ef09dfff43cfe1d1f5e15251b260dd8", // replace with the receiving address
            value: ethers.utils.parseEther("0.1") // Replace with the amount you want to send
        });
        console.log("Transaction successful!", transactionResponse);
    } catch (error) {
        console.error("Transaction error:", error);
        alert("Transaction failed: " + error.message);
    }
};


  return (
    <div className="tour-details-container">
      <div className="tour-ticket">
        <div className="ticket-header">
          <h1>{tour.name}</h1>
          <p>{tour.description}</p>
        </div>

        <div className="ticket-body">
          <img src={tour.imageUrl} alt={tour.name} className="tour-details-image" />
          <div className="ticket-info">
            <p><strong>Price:</strong> {tour.price} ETH</p>

            <label htmlFor="date-select">Choose a date and location:</label>
            <select id="date-select" onChange={handleDateChange}>
              {tour.dates.map((dateInfo) => (
                <option key={dateInfo.date} value={dateInfo.date}>
                  {dateInfo.city} - {dateInfo.date}
                </option>
              ))}
            </select>

            <p><strong>Selected Date:</strong> {selectedDate.city} on {selectedDate.date}</p>
          </div>
        </div>

        <div className="user-details-section">
          <h3>Enter Your Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="user-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="user-input"
          />
        </div>

        {connected && account && (
          <div className="wallet-info">
            <p><strong>Connected Wallet:</strong> {account}</p>
          </div>
        )}

        <div className="ticket-footer">
          {connected ? (
            <button onClick={handleBuyTicket} className="buy-ticket-btn">
              Buy Ticket
            </button>
          ) : (
            <button onClick={connectWallet} className="connect-wallet-btn">
              Connect MetaMask
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
