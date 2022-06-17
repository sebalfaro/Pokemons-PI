import React from "react";
import { useDispatch } from "react-redux";
import { resetOrder } from "../../redux/actions/actions";

const ResetOrder = () => {

  const dispatch = useDispatch()
  const onClickButton = ()=>{
    dispatch(resetOrder())
  }

  return (
    <button onClick={onClickButton}>Reset Order</button>
  );
};

export default ResetOrder;
