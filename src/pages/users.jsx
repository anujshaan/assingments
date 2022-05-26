import React from "react";
import UserCard from "./../components/profile/UserCard";

const Users = () => {
  return (
    <div className="users">
      <UserCard props={"Follow"} />
      <hr />
      <UserCard props={"Follow"} />
      <hr />
      <UserCard props={"Follow"} />
      <hr />
      <UserCard props={"Following"} />
      <hr />
      <UserCard props={"Following"} />
      <hr />
    </div>
  );
};

export default Users;
