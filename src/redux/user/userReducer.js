import {
  Fetch_User_Failure,
  Fetch_User_Request,
  Fetch_User_Success,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_User_Request:
      return {
        ...state,
        loading: true,
      };
    case Fetch_User_Success:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case Fetch_User_Failure:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
