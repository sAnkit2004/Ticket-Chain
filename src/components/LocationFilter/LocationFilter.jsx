import React, { useState } from 'react';
import './LocationFilter.css';

const LocationFilter = () => {
  const [city, setCity] = useState('Bhubaneswar, IN');
  const [date, setDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCity, setNewCity] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCityChange = () => {
    setCity(newCity);
    setNewCity('');
    closeModal();
  };

  return (
    <div className="location-filter-container">
      <div className="location-filter">
        <p>Browse Events</p>
        <h1>{city}</h1>

        <div className="button-group">
          <button onClick={openModal}>Change Location</button>
          <input 
            type="date" 
            value={date} 
            onChange={handleDateChange} 
            className="date-filter"
          />
        </div>
      </div>

      {/* Modal for changing location */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Change Location</h2>
            <input 
              type="text" 
              placeholder="Enter new city" 
              value={newCity} 
              onChange={(e) => setNewCity(e.target.value)} 
            />
            <div className="modal-buttons">
              <button onClick={handleCityChange}>Save</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationFilter;
