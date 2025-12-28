// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnr0s-omxkWRWhJmMfUBbA627pC2LPWHw",
  authDomain: "netflixgpt-5bc5a.firebaseapp.com",
  projectId: "netflixgpt-5bc5a",
  storageBucket: "netflixgpt-5bc5a.firebasestorage.app",
  messagingSenderId: "471993231680",
  appId: "1:471993231680:web:d410d849a5abd06fbf72a5",
  measurementId: "G-0PS8YEYSWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
