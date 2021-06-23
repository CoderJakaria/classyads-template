import React from "react";
import "./TestimonialsSlideCard.css";

const TestimonialsSlideCard = ({ imageURL, name, quote }) => {
  return (
    <div className="testimonialsSlideCard">
      <img src={imageURL} alt={name} />
      <p>{name}</p>
      <p>“{quote}”</p>
    </div>
  );
};

export default TestimonialsSlideCard;
