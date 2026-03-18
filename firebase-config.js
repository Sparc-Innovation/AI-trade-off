import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCFXup0t6IFv0yrqyb5cWWw9291SMVXQO4",
  authDomain: "ai-trade-off-a4406.firebaseapp.com",
  databaseURL: "https://ai-trade-off-a4406-default-rtdb.firebaseio.com",
  projectId: "ai-trade-off-a4406",
  storageBucket: "ai-trade-off-a4406.firebasestorage.app",
  messagingSenderId: "1029628140383",
  appId: "1:1029628140383:web:2621d61c1aea68455cb4ea",
  measurementId: "G-WF4X0L9LC5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
