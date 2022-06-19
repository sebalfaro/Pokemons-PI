import React from "react";
import './TypeCard.css'

export const TypeCard = ({ type }) => {
  return (
    <div className="typecard_box">
      <p>{type}</p>
    </div>
  );
};
