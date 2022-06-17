import React from "react";
import { useDispatch } from "react-redux";
import { ORIGINAL, CREATED } from "../../constants/sort";
import { sortByCreation } from "../../redux/actions/actions";


const CreatedOrder = () => {

  const dispatch = useDispatch()

  const onChangeSelect = (e)=>{
    dispatch(sortByCreation(e.target.value))
  }

  return ( 
    <div>
      <label htmlFor="select">Created by User</label>
      <select name="select" onChange={onChangeSelect}>
        <option value={CREATED}>Created by User</option>
        <option value={ORIGINAL}>Original</option>
      </select>
    </div>
  );
};

export default CreatedOrder;
