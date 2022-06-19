import React from "react";
import AlphaOrder from "../AlphaOrder/AlphaOrder";
import AttackOrder from "../AttackOrder/AttackOrder";
import CreatedOrder from "../CreatedOrder/CreatedOrder";
import ResetOrder from "../ResetOrder/ResetOrder";
import './FilterMenu.css'

const FilterMenu = () => {
  return (
    <section className="filtermenu_box">
      <h2>FilterMenu</h2>
      <div className="filtermenu_options">
        <AlphaOrder />
        <AttackOrder />
        <CreatedOrder />
        <ResetOrder />
      </div>
    </section>
  );
};

export default FilterMenu;
