import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-react-a64f4.firebaseapp.com",
  projectId: "chatapp-react-a64f4",
  storageBucket: "chatapp-react-a64f4.appspot.com",
  messagingSenderId: "990775654070",
  appId: "1:990775654070:web:c125d6f744cde1b72b5817",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
