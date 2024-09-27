import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LocationFilter from './components/LocationFilter/LocationFilter';
import Cards2 from './components/Cards2/Cards2';
import Footer from './components/Footers/Footers';
import TourDetails from './components/TourDetails/TourDetails';
import TicketConfirmation from './components/TicketConfirmation/TicketConfirmation';
import Transactions from './components/Transactions/Transactions';
import './App.css';

function App() {
  // State to hold transactions
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <LocationFilter />
        <Routes>
          <Route path="/" element={<Cards2 />} />
          {/* Pass setTransactions as a prop to TourDetails */}
          <Route path="/tourdetails/:id" element={<TourDetails setTransactions={setTransactions} />} />
          <Route path="/ticket-confirmation" element={<TicketConfirmation />} />
          {/* Pass transactions as a prop to Transactions */}
          <Route path="/sell" element={<Transactions transactions={transactions} />} />
        </Routes>
      </Router>
      <br />
      <Footer />
    </>
  );
}

export default App;
