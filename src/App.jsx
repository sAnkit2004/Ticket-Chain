import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LocationFilter from './components/LocationFilter/LocationFilter';
import Cards2 from './components/Cards2/Cards2';
import Footer from './components/Footers/Footers';
import TourDetails from './components/TourDetails/TourDetails'; // Import TourDetails
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <LocationFilter />
        <Routes>
          {/* Route for showing the Cards2 component */}
          <Route path="/" element={<Cards2 />} />
          {/* Route for showing the details of a specific tour */}
          <Route path="/tourdetails/:id" element={<TourDetails />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
