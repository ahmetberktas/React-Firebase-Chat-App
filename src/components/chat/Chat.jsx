import React from "react";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt=""></img>
          <div className="texts">
            <span>Oğuzcan Oğuz</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone"></img>
          <img src="./video.png" alt="video"></img>
          <img src="./info.png" alt="info"></img>
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./photo.png"></img>
          <img src="./camera.png"></img>
          <img src="./microphone.png"></img>
        </div>
        <input type="text" placeholder="Mesaj yazınız"></input>
        <div className="emoji">
          <img src="./emoji.png"></img>
        </div>
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
