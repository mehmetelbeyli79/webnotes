// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjxD5XGkWOHxkmgxBErTC6klUGulz4BDs",
  authDomain: "webnotes-1fc50.firebaseapp.com",
  projectId: "webnotes-1fc50",
  storageBucket: "webnotes-1fc50.appspot.com",
  messagingSenderId: "209634402744",
  appId: "1:209634402744:web:ddd50260bfa3ee66baef4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);