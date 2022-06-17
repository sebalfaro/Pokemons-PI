import React from "react";
import AlphaOrder from "../AlphaOrder/AlphaOrder";
import AttackOrder from "../AttackOrder/AttackOrder";
import CreatedOrder from "../CreatedOrder/CreatedOrder";

const FilterMenu = () => {
  return (
    <div>
      <h2>FilterMenu</h2>
      <AlphaOrder />
      <AttackOrder /> 
      <CreatedOrder />
    </div>
  );
};

export default FilterMenu;
