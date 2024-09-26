import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import './TourDetails.css';

const topSellingTours = [
  // Tour data as you provided
  { 
    id: 1, 
    name: "DIL-LUMINATI", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXhFGSyptI27e893pF-9MMCeSmM6WSH4zbg&s", 
    description: "Experience the sensational Dil-Luminati concert, a night of lights and sound!",
    price: "$150",
    dates: [
      { city: "New York", date: "2024-10-12" },
      { city: "Los Angeles", date: "2024-11-05" },
      { city: "Chicago", date: "2024-12-01" }
    ]
  },
  { 
    id: 2, 
    name: "COLD-PLAY", 
    imageUrl: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-2801154,resizemode-75,msid-113587153/news/india/rs-3-4-lakh-for-a-coldplay-concert-ticket-frustrated-fans-say-people-are-buying-to-make-money-not-to-attend.jpg", 
    description: "Join Coldplay for an unforgettable live performance.",
    price: "$300",
    dates: [
      { city: "San Francisco", date: "2024-09-15" },
      { city: "Miami", date: "2024-10-22" },
      { city: "Dallas", date: "2024-11-18" }
    ]
  },
  { 
    id: 3, 
    name: "ALAN-WALKER", 
    imageUrl: "https://res.klook.com/image/upload/v1714029084/apv83efi3nacfjdymgzo.jpg", 
    description: "Get lost in the electrifying beats of Alan Walker.",
    price: "$200",
    dates: [
      { city: "Las Vegas", date: "2024-09-10" },
      { city: "Denver", date: "2024-10-20" },
      { city: "Seattle", date: "2024-11-08" }
    ]
  }
];

const TourDetails = () => {
  const { id } = useParams();
  const tour = topSellingTours.find((tour) => tour.id === parseInt(id));
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(tour.dates[0]);
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactionHash, setTransactionHash] = useState(null);

  const handleDateChange = (event) => {
    const selected = tour.dates.find(date => date.date === event.target.value);
    setSelectedDate(selected);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balanceInWei = await provider.getBalance(accounts[0]);
        setBalance(ethers.utils.formatEther(balanceInWei));
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to proceed.");
    }
  };

  const transferFunds = async () => {
    if (!account) {
      alert("Please connect to MetaMask.");
      return;
    }

    const walletAddress = "0x6Db1056064db0cF9C03A6e955111E999bbdb5959";  // Receiver's address
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      const txResponse = await signer.sendTransaction({
        to: walletAddress,
        value: ethers.utils.parseEther("0.0001"),  // Amount in ETH to transfer
      });

      setTransactionHash(txResponse.hash);
      console.log("Transaction successful!", txResponse);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const printReceipt = () => {
    const printContent = `
      <div>
        <p><strong>Transaction Hash:</strong> ${transactionHash}</p>
        <p><strong>From:</strong> ${account}</p>
        <p><strong>To:</strong> 0x6Db1056064db0cF9C03A6e955111E999bbdb5959</p>
        <p><strong>Amount:</strong> 0.0001 ETH</p>
      </div>
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.body.innerHTML = printContent;
    printWindow.print();
  };

  if (!tour) {
    return <div>Tour not found</div>;
  }

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
            <p><strong>Price:</strong> {tour.price}</p>
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
          <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleInputChange} />
        </div>

        {account ? (
          <div className="wallet-info">
            <p><strong>Connected Wallet:</strong> {account}</p>
            <p><strong>Balance:</strong> {balance} ETH</p>
          </div>
        ) : (
          <button onClick={connectWallet} className="connect-wallet-btn">Connect MetaMask</button>
        )}

        {transactionHash && (
          <div id="transactionDetailsDiv">
            <h4>Transaction Details</h4>
            <p><strong>Transaction Hash:</strong> {transactionHash}</p>
            <button id="printButton" onClick={printReceipt}>Print Receipt</button>
          </div>
        )}

        <div className="ticket-footer">
          <button onClick={transferFunds} className="buy-ticket-btn">Buy Ticket with Crypto</button>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
