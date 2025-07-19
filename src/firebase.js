// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPKu4gv6YMrCNaDmDldLanWiepiyTvuSg",
  authDomain: "line-clone-fe1c3.firebaseapp.com",
  projectId: "line-clone-fe1c3",
  storageBucket: "line-clone-fe1c3.firebasestorage.app",
  messagingSenderId: "112575941355",
  appId: "1:112575941355:web:b7f98a6b15d77e76094cae",
  measurementId: "G-1FX3DM6SQE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);