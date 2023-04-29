import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number Of Cakes: {props.numOfCakes}</h2>
      <button onClick={() => props.buyCake(3)}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (cake) => dispatch(buyCake(cake)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
