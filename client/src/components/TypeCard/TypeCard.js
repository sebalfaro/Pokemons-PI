import React from "react";
import './TypeCard.css'

export const TypeCard = ({ type }) => {
  let classType = `typecard_box ${type}`

  return (
    <div className={classType}>
      <span>{type}</span>
    </div>
  );
};
