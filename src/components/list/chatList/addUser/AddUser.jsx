import React, { useState } from "react";
import "./addUser.css";
import { db } from "../../../../lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  getDoc as getDocFromFirestore,
} from "firebase/firestore";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      } else {
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    if (!user || !currentUser || !user.id || !currentUser.id) return;

    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      // Kullanıcının zaten mevcut olup olmadığını kontrol et
      const userChatSnap = await getDocFromFirestore(
        doc(userChatsRef, user.id)
      );
      const userChatsData = userChatSnap.data();
      const existingChat = userChatsData?.chats?.find(
        (chat) => chat.receiverId === currentUser.id
      );

      if (existingChat) {
        console.log("Chat already exists");
        return;
      }

      // Yeni chat dokümanı oluşturuluyor
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      // Alıcı kullanıcıya güncelleme
      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      // Gönderen kullanıcıya güncelleme
      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (err) {
      console.log("Error adding chat:", err);
    }
  };

  return (
    <div className="addUser">
      <form className="addUserForm" onSubmit={handleSearch}>
        <input
          className="username"
          type="text"
          placeholder="Username"
          name="username"
        />
        <button className="userSearch">Search</button>
        {user && (
          <div className="userSearchList">
            <div className="userSearchDetail">
              <img
                className="userImage"
                src={user.avatar || "./avatar.png"}
                alt="User Avatar"
              />
              <span className="searchUserName">{user.username}</span>
            </div>
            <button type="button" onClick={handleAdd} className="addUserButton">
              Add User
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddUser;
