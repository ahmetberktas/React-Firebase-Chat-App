import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
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
      <div className="center">
        <div className="message up">
          <img src="./avatar.png" alt=""></img>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./cappadocia.jpg"></img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div className="message up">
          <img src="./avatar.png" alt=""></img>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div className="message up">
          <img src="./avatar.png" alt=""></img>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div className="message up">
          <img src="./avatar.png" alt=""></img>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              ratione eligendi inventore sequi, quam vero adipisci vitae quaerat
              unde quidem, molestiae tempore aspernatur? Laborum veniam ea
              possimus velit, itaque voluptatem?
            </p>
            <span>1 dakika önce</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./photo.png"></img>
          <img src="./camera.png"></img>
          <img src="./microphone.png"></img>
        </div>
        <input
          type="text"
          placeholder="Mesaj yazınız"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <div className="emoji">
          <img src="./emoji.png" onClick={() => setOpen((prev) => !prev)}></img>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}></EmojiPicker>
          </div>
        </div>
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
