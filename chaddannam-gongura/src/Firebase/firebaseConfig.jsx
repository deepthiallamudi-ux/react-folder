
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOrioI9eTBntiexxRNOa833DiUKaOWFMI",
  authDomain: "food-order-app-f4fc6.firebaseapp.com",
  databaseURL: "https://food-order-app-f4fc6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-order-app-f4fc6",
  storageBucket: "food-order-app-f4fc6.firebasestorage.app",
  messagingSenderId: "668644529170",
  appId: "1:668644529170:web:a3cab933fb7fd2661474cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export auth

export const auth=getAuth(app);
export const db= getDatabase(app);
export default app;
