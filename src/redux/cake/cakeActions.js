import { Buy_Cake } from "./cakeTypes";

export const buyCake = (cake) => {
  return {
    type: Buy_Cake,
    payload: cake,
  };
};
