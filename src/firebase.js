// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf-4m4ZKQbkk89a47XLoXwGjQAR4EajjY",
  authDomain: "react-chat-b84f1.firebaseapp.com",
  projectId: "react-chat-b84f1",
  storageBucket: "react-chat-b84f1.appspot.com",
  messagingSenderId: "704677902679",
  appId: "1:704677902679:web:0a8ed42d6f7d31e41ce612",
  measurementId: "G-CB84F48V73",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
