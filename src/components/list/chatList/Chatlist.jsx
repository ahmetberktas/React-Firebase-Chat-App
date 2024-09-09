import React, { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const Chatlist = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);
          const user = userDocSnap.data();
          return { ...item, user };
        });
        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );
    return () => {
      unSub();
    };
  }, [currentUser.id]);

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
      {chats.map((chat) => (
        <div className="items" key={chat.chatId}>
          <img src="./avatar.png" alt=""></img>
          <div className="texts">
            <span>Oğuzcan Oğuz</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser></AddUser>}
    </div>
  );
};

export default Chatlist;
