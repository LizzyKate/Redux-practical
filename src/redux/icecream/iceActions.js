import { Ice_Cream } from "./iceTypes";

export const buyIceCream = (ice) => {
  return {
    type: Ice_Cream,
    payload: ice,
  };
};
