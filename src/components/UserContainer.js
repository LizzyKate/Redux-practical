import React, { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const UserContainer = () => {
  const selector = useSelector((state) => state.user);
  const dispatch = useDispatch(fetchUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {selector.loading ? (
        <h2>Loading</h2>
      ) : selector.error ? (
        <h2>{selector.error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {selector &&
              selector.users &&
              selector.users.map((user) => <p key={user.id}>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserContainer;
