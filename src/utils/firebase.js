// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC541YFKtRq-VDp3bGmvfEOmR0OBoCEwXE",
  authDomain: "netflixgpt-48032.firebaseapp.com",
  projectId: "netflixgpt-48032",
  storageBucket: "netflixgpt-48032.firebasestorage.app",
  messagingSenderId: "1041521576880",
  appId: "1:1041521576880:web:79d984cc7de9e499266475",
  measurementId: "G-1ZSY5Q0M46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();