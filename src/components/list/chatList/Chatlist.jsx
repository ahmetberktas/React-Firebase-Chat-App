import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const Chatlist = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();
  const { changeChat, chatId } = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        try {
          const data = res.data();
          if (data && Array.isArray(data.chats)) {
            const items = data.chats;

            const promises = items.map(async (item) => {
              const userDocRef = doc(db, "users", item.receiverId);
              const userDocSnap = await getDoc(userDocRef);
              const user = userDocSnap.data();
              return { ...item, user };
            });

            const chatData = await Promise.all(promises);

            const uniqueChats = Array.from(
              new Map(
                chatData.map((chat) => [
                  `${chat.chatId}-${chat.receiverId}`,
                  chat,
                ])
              ).values()
            );

            setChats(
              uniqueChats.sort(
                (a, b) => (b.updatedAt || 0) - (a.updatedAt || 0)
              )
            );
          } else {
            setChats([]);
          }
        } catch (error) {
          console.error("Error fetching chats:", error);
        }
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    changeChat(chat.chatId, chat.user);
  };

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="Search" />
          <input className="searchInput" type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="Toggle Add Mode"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {chats.map((chat) => (
        <div
          className="items"
          key={`${chat.chatId}-${chat.receiverId}`}
          onClick={() => handleSelect(chat)}
        >
          <img src={chat.user?.avatar || "./avatar.png"} alt="Avatar" />
          <div className="texts">
            <span>{chat.user?.username || "Unknown User"}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}
    </div>
  );
};

export default Chatlist;
