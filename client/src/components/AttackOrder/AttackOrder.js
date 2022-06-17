import React from "react";
import { useDispatch } from "react-redux";
import { ASCENDING, DESCENDING } from "../../constants/sort";
import { sortbyAttack } from "../../redux/actions/actions";

const AttackOrder = () => {

  const dispatch = useDispatch()

  const onChangeSelect = (e)=>{
    dispatch(sortbyAttack(e.target.value))
  }


  return (
    <div>
      
      <label htmlFor="select">Order by Attack</label>
      <select name="select" onChange={onChangeSelect}>
        <option value={ASCENDING}>Lower Attack</option>
        <option value={DESCENDING}>Higher Attack</option>
      </select>
    </div>
  );
};

export default AttackOrder;
