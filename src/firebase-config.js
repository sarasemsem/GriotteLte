// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getfirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1hdY6Ay4A9COIXU7bTVbhmpg9DhlV7mA",
  authDomain: "griottelte.firebaseapp.com",
  projectId: "griottelte",
  storageBucket: "griottelte.appspot.com",
  messagingSenderId: "175072994728",
  appId: "1:175072994728:web:f98e5486230e71443f299d",
  measurementId: "G-7GR7YL2ZL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getfirestore(app);