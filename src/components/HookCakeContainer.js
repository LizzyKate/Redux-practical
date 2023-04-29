import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const HookCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes:{numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake(2))}>Buy Cake</button>
    </div>
  );
};

export default HookCakeContainer;
