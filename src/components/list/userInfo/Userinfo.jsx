import React from "react";
import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="userImage"></img>
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="more"></img>
        <img src="./video.png" alt="video"></img>
        <img src="./edit.png" alt="edit"></img>
      </div>
    </div>
  );
};

export default Userinfo;
