import React from "react";
import PostCard from "../components/PostCard";

const Feeds = () => {
  return (
    <div className="feed">
      <button className="feed--write">Write</button>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Feeds;
