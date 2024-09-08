import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Login Success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      closeButton: false,
    });
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
          <button className="singBtn">Sign In</button>
        </form>
        <button className="google-login">
          <img src="./google-icon.png" alt="Google Icon" />
          Sign in with Google
        </button>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
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
          <button className="singBtn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
