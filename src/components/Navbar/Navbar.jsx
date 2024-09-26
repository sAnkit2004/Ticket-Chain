import React, { useState } from 'react';
import './Navbar.css'; // Import your styles here
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [account, setAccount] = useState(null); // State to store connected wallet address

  // Function to connect to MetaMask wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Set the connected account
        setAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setAccount(null); // Clear the account state
    console.log("Wallet disconnected");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">TicketChain.in</a>
        </div>

        <ul className="navbar-links">
          <li><a href="/sports">Sports</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/shows">Shows</a></li>
          <li><a href="/cities">Cities</a></li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-options">
            <span>USD</span>
            <a href="/sell">Sell</a>
            <a href="/support">Support</a>

            {/* Show account address if connected, otherwise show Connect button */}
            {account ? (
              <>
                <span className="connected-account">
                  Connected: {account.slice(0, 6)}...{account.slice(-4)}
                </span>
                <button onClick={disconnectWallet} className="navbar-disconnect">Disconnect</button>
              </>
            ) : (
              <button onClick={connectWallet} className="navbar-login">Connect</button>
            )}
          </div>
        </div>
      </nav>

      <div className="header-content">
        <h1>Let there be live</h1>
        <p>Your next best-night-ever is waiting</p>
        
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="What do you want to see live?" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
