import React, { useState } from 'react';
import { ethers } from 'ethers';

import './Transactions.css';

const Transactions = () => {
    const [tokenId, setTokenId] = useState('');
    const [cost, setCost] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [buyerName, setBuyerName] = useState('');
    const [buyerAddress, setBuyerAddress] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerAddress, setSellerAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!window.ethereum) {
            alert("Please install MetaMask!");
            return;
        }

        const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
        const signer = provider.getSigner();
        const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        const nftTicketingSystem = new ethers.Contract(contractAddress, NFTTicketingSystemABI, signer);

        try {
            const transaction = await nftTicketingSystem.createTransaction(
                tokenId,
                ethers.utils.parseEther(cost),
                buyerEmail,
                buyerName,
                buyerAddress,
                sellerEmail,
                sellerName,
                sellerAddress,
                { value: ethers.utils.parseEther(cost) }
            );
            await transaction.wait();
            alert('Transaction successful!');
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Transaction failed. See console for details.');
        }
    };

    return (
        <div className="transaction-page">
            <div className="transaction-container">
                <h1 className="title">NFT Transaction Page</h1>
                <form onSubmit={handleSubmit} className="transaction-form">
                    <input
                        type="text"
                        placeholder="Token ID"
                        value={tokenId}
                        onChange={(e) => setTokenId(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Cost (in AVAX)"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        className="input-field"
                        required
                    />
                    <h2 className="section-title">Buyer Information</h2>
                    <input
                        type="email"
                        placeholder="Buyer Email"
                        value={buyerEmail}
                        onChange={(e) => setBuyerEmail(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Buyer Name"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Buyer Address"
                        value={buyerAddress}
                        onChange={(e) => setBuyerAddress(e.target.value)}
                        className="input-field"
                        required
                    />
                    <h2 className="section-title">Seller Information</h2>
                    <input
                        type="email"
                        placeholder="Seller Email"
                        value={sellerEmail}
                        onChange={(e) => setSellerEmail(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Seller Name"
                        value={sellerName}
                        onChange={(e) => setSellerName(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Seller Address"
                        value={sellerAddress}
                        onChange={(e) => setSellerAddress(e.target.value)}
                        className="input-field"
                        required
                    />
                    <button type="submit" className="submit-button">Create Transaction</button>
                </form>
            </div>
        </div>
    );
};

export default Transactions;
