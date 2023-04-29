import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { iceReducer } from "./icecream/iceReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
  user: userReducer,
});
