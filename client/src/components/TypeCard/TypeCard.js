import React from "react";
import './TypeCard.css'

export const TypeCard = ({ type }) => {
  return (
    <div className="typecard_box">
      <p className="typecard_box_text" >{type}</p>
    </div>
  );
};
