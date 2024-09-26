import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards2.css';

const topSellingTours = [
  { id: 1, name: "DIL-LUMINATI", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXhFGSyptI27e893pF-9MMCeSmM6WSH4zbg&s" },
  { id: 2, name: "COLD-PLAY", imageUrl: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-2801154,resizemode-75,msid-113587153/news/india/rs-3-4-lakh-for-a-coldplay-concert-ticket-frustrated-fans-say-people-are-buying-to-make-money-not-to-attend.jpg" },
  { id: 3, name: "ALAN-WALKER", imageUrl: "https://res.klook.com/image/upload/v1714029084/apv83efi3nacfjdymgzo.jpg" }
];

function Cards2() {
  const navigate = useNavigate(); // Use the useNavigate hook to handle navigation

  const handleCardClick = (tourId) => {
    // Navigate to the TourDetails page with the selected tour's id
    navigate(`/tourdetails/${tourId}`);
  };

  return (
    <div className="App">
      <div className="top-selling-section">
        <h2>Top Selling Concert Tours</h2>
        <div className="top-selling-tours">
          {topSellingTours.map((tour) => (
            <div
              className="tour-card"
              key={tour.id}
              onClick={() => handleCardClick(tour.id)} // Navigate when the card is clicked
              style={{ cursor: 'pointer' }} // Optional: Add cursor to indicate clickability
            >
              <img src={tour.imageUrl} alt={tour.name} />
              <p>{tour.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards2;
