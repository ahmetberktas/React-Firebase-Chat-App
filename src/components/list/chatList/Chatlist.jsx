import React, { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="Search"></img>
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
          ></input>
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="Plus"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        ></img>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Oğuzcan Oğuz</span>
          <p>Selam</p>
        </div>
      </div>
      {addMode && <AddUser></AddUser>}
    </div>
  );
};

export default Chatlist;
