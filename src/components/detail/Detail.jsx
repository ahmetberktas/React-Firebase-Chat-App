import React from "react";
import "./detail.css";
import { auth } from "../../lib/firebase";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt=""></img>
        <h2>Oğuzcan Oğuz</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt=""></img>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt=""></img>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt=""></img>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./cappadocia.jpg" alt=""></img>
                <span>cappadocia.jpg</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./cappadocia.jpg" alt=""></img>
                <span>cappadocia.jpg</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./cappadocia.jpg" alt=""></img>
                <span>cappadocia.jpg</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./cappadocia.jpg" alt=""></img>
                <span>cappadocia.jpg</span>
              </div>
              <img src="./download.png" alt="" className="icon"></img>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt=""></img>
          </div>
        </div>
        <button className="block">Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
