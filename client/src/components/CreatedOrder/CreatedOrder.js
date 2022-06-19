import React from "react";
import { useDispatch } from "react-redux";
import { ORIGINAL, CREATED } from "../../constants/sort";
import { sortByCreation } from "../../redux/actions/actions";
import "./CreatedOrder.css"

const CreatedOrder = () => {

  const dispatch = useDispatch()

  const onChangeSelect = (e)=>{
    dispatch(sortByCreation(e.target.value))
  }

  return ( 
    <div className="createdorder_box">
      <label className="createdorder_box_label" htmlFor="select">Created by User</label>
      <select className="createdorder_box_select" name="select" onChange={onChangeSelect}>
        <option value={ORIGINAL}>Original</option>
        <option value={CREATED}>Created by User</option>
      </select>
    </div>
  );
};

export default CreatedOrder;
