import React from "react";
import "./Cards.css";

const categories = [
  { id: 1, name: "Concerts", imageUrl: "https://img.rasset.ie/001fdc57-1200.jpg" },
  { id: 2, name: "Cricket", imageUrl: "https://www.thecitizen.in/h-upload/old_images/1500x900_148462-f5413b970c1582bfa2549d3d30097bc1.webp" },
  { id: 3, name: "Football", imageUrl: "https://i.pinimg.com/474x/20/a0/f1/20a0f129498dc20d15d6de5081d9c821.jpg" }
 
];


function Cards() {
  return (
    <div className="App">
      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img src={category.imageUrl} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      
        
      
    </div>
  );
}

export default Cards;
