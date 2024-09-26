import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    console.log("Wallet disconnected");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">TicketChain.in</Link>
        </div>

        <div className="navbar-right">
          <div className="navbar-options">
            <span>USD</span>
            <Link to="/sell">Sell</Link> {/* Use Link to navigate */}
            <a href="/support">Support</a>

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
