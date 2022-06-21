import React from "react";
import { useDispatch } from "react-redux";
import { ASCENDING, DESCENDING } from "../../constants/sort";
import { sortbyName } from "../../redux/actions/actions";
import './AlphaOrder.css'

const AlphaOrder = () => {

  const dispatch = useDispatch()

  const onChangeSelect = (e)=>{
    dispatch(sortbyName(e.target.value))
  }

  return ( 
    <div className="alphaorder_box">
      <label className="alphaorder_box_label" htmlFor="select">Order by Name</label>
      <select className="alphaorder_select" name="select" onChange={onChangeSelect}>
        <option value={ASCENDING}>A-Z</option>
        <option value={DESCENDING}>Z-A</option>
      </select>
    </div>
  );
};

export default AlphaOrder;
