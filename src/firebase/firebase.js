import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-D57mPkuK2wFutN4w5NF3EtLlSEpDOpM",
  authDomain: "therapy-back.firebaseapp.com",
  projectId: "therapy-back",
  storageBucket: "therapy-back.appspot.com",
  messagingSenderId: "488791685582",
  appId: "1:488791685582:web:c8b4f206e0b896ba41d39f",
  measurementId: "G-R5LSG32KYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
