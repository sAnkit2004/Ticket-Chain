import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LocationFilter from './components/LocationFilter/LocationFilter';
import Cards2 from './components/Cards2/Cards2';
import Footer from './components/Footers/Footers';
import TourDetails from './components/TourDetails/TourDetails';
import TicketConfirmation from './components/TicketConfirmation/TicketConfirmation'; // Import the new component
import './App.css';

function App() {
  return (
    <>
    <Router>
      
        <Navbar />
        <LocationFilter />
        <Routes>
          <Route path="/" element={<Cards2 />} />
          <Route path="/tourdetails/:id" element={<TourDetails />} />
          <Route path="/ticket-confirmation" element={<TicketConfirmation />} /> {/* New route */}
        </Routes>
        
    </Router>
    <br />
    <Footer></Footer>
    </>
    
  );
}

export default App;
