import React from "react";
import './TypeCard.css'

export const TypeCard = ({ type }) => {
  return (
    <div className="typecard_box">
      <span>{type}</span>
    </div>
  );
};
