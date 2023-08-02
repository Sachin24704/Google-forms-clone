import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj8aMa6pwGJXOi7fW3NumHGsfl8ccm0tE",
  authDomain: "form-clone-3678f.firebaseapp.com",
  projectId: "form-clone-3678f",
  storageBucket: "form-clone-3678f.appspot.com",
  messagingSenderId: "437692436044",
  appId: "1:437692436044:web:186ef8ee08de4a5fd5eee9",
  measurementId: "G-47GEFSZPY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
