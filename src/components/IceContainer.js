import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/icecream/iceActions";

const IceContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of IceCream:{numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream(2))}>Buy Ice Cream</button>
    </div>
  );
};

export default IceContainer;
