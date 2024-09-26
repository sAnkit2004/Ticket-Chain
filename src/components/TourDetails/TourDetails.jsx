import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample data for tours
const topSellingTours = [
  { 
    id: 1, 
    name: "DIL-LUMINATI", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXhFGSyptI27e893pF-9MMCeSmM6WSH4zbg&s", 
    description: "Experience the sensational Dil-Luminati concert, a night of lights and sound!",
    price: "$150"
  },
  { 
    id: 2, 
    name: "COLD-PLAY", 
    imageUrl: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-2801154,resizemode-75,msid-113587153/news/india/rs-3-4-lakh-for-a-coldplay-concert-ticket-frustrated-fans-say-people-are-buying-to-make-money-not-to-attend.jpg", 
    description: "Join Coldplay for an unforgettable live performance.",
    price: "$300"
  },
  { 
    id: 3, 
    name: "ALAN-WALKER", 
    imageUrl: "https://res.klook.com/image/upload/v1714029084/apv83efi3nacfjdymgzo.jpg", 
    description: "Get lost in the electrifying beats of Alan Walker.",
    price: "$200"
  }
];

function TourDetails() {
  const { tourId } = useParams();  // Get the tour ID from the URL params
  const navigate = useNavigate();

  // Find the tour with the matching ID
  const tour = topSellingTours.find((tour) => tour.id === parseInt(tourId));

  const handleBuyTicket = () => {
    // This could navigate to a purchase page, for example
    alert(`You have selected to buy a ticket for ${tour.name}.`);
    navigate("/purchase");  // Optionally navigate to a purchase page
  };

  // If no tour is found (invalid tourId), handle it
  if (!tour) {
    return <div>Tour not found.</div>;
  }

  return (
    <div className="tour-details">
      <h1>{tour.name}</h1>
      <img src={tour.imageUrl} alt={tour.name} />
      <p>{tour.description}</p>
      <p><strong>Price:</strong> {tour.price}</p>
      
      {/* Buy Ticket Button */}
      <button onClick={handleBuyTicket} className="buy-ticket-btn">
        Buy Ticket
      </button>
    </div>
  );
}

export default TourDetails;
