// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8APb_6Vbc8PjfJ9t1gsAy4HxZ5c7iS40",
  authDomain: "react-firebase-auth-790f9.firebaseapp.com",
  projectId: "react-firebase-auth-790f9",
  storageBucket: "react-firebase-auth-790f9.appspot.com",
  messagingSenderId: "962127514066",
  appId: "1:962127514066:web:52b964fe84be83f204a00b",
  measurementId: "G-V73GJVVH1W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
