import React from "react";
import "./addUser.css";

const AddUser = () => {
  return (
    <div className="addUser">
      <form className="addUserForm">
        <input
          className="username"
          type="text"
          placeholder="Username"
          name="username"
        ></input>
        <button className="userSearch">Search</button>
        <div className="userSearchList">
          <div className="userSearchDetail">
            <img className="userImage" src="./avatar.png"></img>
            <span className="searchUserName">Yusuf Dölen</span>
          </div>
          <button className="addUserButton">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
