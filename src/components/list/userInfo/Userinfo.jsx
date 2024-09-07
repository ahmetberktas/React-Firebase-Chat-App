import React from "react";
import "./userInfo.css";

const Userinfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="userImage"></img>
        <h2>Ahmet Berktaş</h2>
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
