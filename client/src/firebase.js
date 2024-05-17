// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f42c0.firebaseapp.com",
  projectId: "mern-estate-f42c0",
  storageBucket: "mern-estate-f42c0.appspot.com",
  messagingSenderId: "1054065490976",
  appId: "1:1054065490976:web:d4581a3c05a207effcd045"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);