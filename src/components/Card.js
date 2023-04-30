import React from "react";

export default function Card({ card, onCardClick }) {
  const handleCardClick = () => onCardClick(card);

  return (
      <div className="element">
        <button className="button element__delete"></button>
        <img className="element__picture" src={card.link} alt={card.name} onClick={handleCardClick}/>
        <div className="element__text">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__likes">
            <button className="button element__like" type="button"></button>
            <p className="element__likes-number">{card.likes.length}</p>
          </div>
        </div>
      </div>
  );
}
