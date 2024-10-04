import { useState } from "react";
import "./Card.css";
import { Modal } from "./Modal";

export function Card({ data }) {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const drinksToDisplay = data;

  if (!drinksToDisplay || drinksToDisplay.length === 0) {
    return <p className="no-drinks-message">No drinks found matching your input!</p>;
  }

  const handleCardClick = (drink) => {
    setSelectedDrink(drink);
  };

  const handleCloseModal = () => {
    setSelectedDrink(null);
  };

  return (
    <div>
    <div className="card-container">
      {drinksToDisplay.map((item) => (
        <button
          className="card"
          key={item.id}
          onClick={() => handleCardClick(item)}
        >
          <img src={item.image} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          </div>
        </button>
      ))}
    </div>

    {selectedDrink && (
        <Modal drinkItem={selectedDrink} onClose={handleCloseModal} />
      )}
    </div>
  );
}
