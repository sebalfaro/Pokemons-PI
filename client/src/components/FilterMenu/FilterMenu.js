import React from "react";
import AlphaOrder from "../AlphaOrder/AlphaOrder";
import AttackOrder from "../AttackOrder/AttackOrder";
import CreatedOrder from "../CreatedOrder/CreatedOrder";
import ResetOrder from "../ResetOrder/ResetOrder";

const FilterMenu = () => {
  return (
    <div>
      <h2>FilterMenu</h2>
      <AlphaOrder />
      <AttackOrder /> 
      <CreatedOrder />
      <ResetOrder />
    </div>
  );
};

export default FilterMenu;
