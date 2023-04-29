import {
  Fetch_User_Failure,
  Fetch_User_Request,
  Fetch_User_Success,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: Fetch_User_Request,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: Fetch_User_Success,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: Fetch_User_Failure,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => dispatch(fetchUserSuccess(users)))
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};
