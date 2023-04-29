const intialState = {
  numOfIceCreams: 20,
};

export const iceReducer = (state = intialState, action) => {
  switch (action.type) {
    case "Ice_Cream":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};
