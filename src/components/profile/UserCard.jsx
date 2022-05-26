import React from "react";

const UserCard = ({ props }) => {
  return (
    <div className="user-card">
      <div className="user-card__data">
        <div className="user-card__img"></div>
        <div className="user-card__info">
          <p className="user-card__name">Arjun Reddy</p>
          <p>Following:200</p>
        </div>
      </div>
      <button className={`user-card__${props}`}>{props}</button>
    </div>
  );
};

export default UserCard;
