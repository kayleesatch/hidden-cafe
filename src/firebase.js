// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfbnJX1lqdmBzGoRreiwksXPV3FwMnTC0",
  authDomain: "hiddencafe-c95f6.firebaseapp.com",
  projectId: "hiddencafe-c95f6",
  storageBucket: "hiddencafe-c95f6.firebasestorage.app",
  messagingSenderId: "500675084967",
  appId: "1:500675084967:web:426dcb2945e65787851182",
  measurementId: "G-CWDTKH2FNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);