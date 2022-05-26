import React from "react";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card__user">
        <div className="post-card__user--img"></div>
        <div className="post-card__user--name">Arjun Reddy</div>
        <div className="post-card__time">10 min ago</div>
      </div>
      <div className="post-card__data">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        tempore illo officiis assumenda architecto nam aut, ab consequuntur,
        reiciendis earum laboriosam! Saepe amet nulla aut impedit sequi corporis
        aliquid doloremque.
      </div>
      <div className="post-card--circle"></div>
    </div>
  );
};

export default PostCard;
