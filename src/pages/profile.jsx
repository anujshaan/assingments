import React, { useState } from "react";
import ProfileInfo from "../components/profile/ProfileInfo";
import {
  BsFillGrid3X3GapFill,
  BsFillPersonCheckFill,
  BsFillPersonFill,
} from "react-icons/bs";
import Posts from "../components/profile/Posts";
import Followers from "../components/profile/Followers";
import Following from "./../components/profile/Following";

const Profile = () => {
  const [tabs, setTabs] = useState("post");

  const isActive = (name) => {
    if (name === tabs) return "active--tab";
  };

  return (
    <div className="profile">
      <ProfileInfo />
      <div className="profile__section">
        <div className="profile__section--tabs">
          <span
            onClick={() => setTabs("post")}
            className={`${isActive("post")}`}
          >
            <BsFillGrid3X3GapFill className="tabs--logo" />
            Post
          </span>
          <span
            onClick={() => setTabs("followers")}
            className={`${isActive("followers")}`}
          >
            <BsFillPersonFill className="tabs--logo" />
            Followers
          </span>
          <span
            onClick={() => setTabs("following")}
            className={`${isActive("following")}`}
          >
            <BsFillPersonCheckFill className="tabs--logo" />
            Following
          </span>
        </div>
        {(tabs === "post" && <Posts />) ||
          (tabs === "followers" && <Followers />) ||
          (tabs === "following" && <Following />)}
      </div>
    </div>
  );
};

export default Profile;
