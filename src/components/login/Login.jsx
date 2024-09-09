import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      toast.success("Kayıt İşlemi Başarılı, Giriş Yapabilirsiniz", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        closeButton: false,
      });
    } catch (err) {
      toast.error("Kayıt İşlemi Sırasında Hata Oluştu", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        closeButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      toast.error("Giriş İşlemi Sırasında Hata Oluştu", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        closeButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input
            className="loginInput"
            type="text"
            placeholder="Email"
            name="email"
          ></input>
          <input
            className="loginInput"
            type="password"
            placeholder="Password"
            name="password"
          ></input>
          <button disabled={loading} className="singBtn">
            {loading ? "Loading" : "Sign In"}
          </button>
        </form>
        <button disabled={loading} className="google-login">
          <img src="./google-icon.png" alt="Google Icon" />
          Sign in with Google
        </button>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="Avatar"></img>
            Upload an image
          </label>
          <input
            className="loginInput"
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          ></input>
          <input
            className="loginInput"
            type="text"
            placeholder="Username"
            name="username"
          ></input>
          <input
            className="loginInput"
            type="text"
            placeholder="Email"
            name="email"
          ></input>
          <input
            className="loginInput"
            type="password"
            placeholder="Password"
            name="password"
          ></input>
          <button disabled={loading} className="singBtn">
            {loading ? "Loading" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
