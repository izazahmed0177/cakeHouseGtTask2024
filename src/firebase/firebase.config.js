

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdq-BTWmZzRtfF67p6kFwWv35OeHqaze0",
  authDomain: "cakehousegt2024.firebaseapp.com",
  projectId: "cakehousegt2024",
  storageBucket: "cakehousegt2024.appspot.com",
  messagingSenderId: "170865970454",
  appId: "1:170865970454:web:29cb6924f99cd915475437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// =============================
// ==============================
const auth=getAuth(app);

export default auth;