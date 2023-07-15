// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMPTESp0rt_zMsA9tW_6roVESkp9RGG9Q",
  authDomain: "lagorio-bea8a.firebaseapp.com",
  projectId: "lagorio-bea8a",
  storageBucket: "lagorio-bea8a.appspot.com",
  messagingSenderId: "994811382508",
  appId: "1:994811382508:web:405e9717aaf5032bcf73c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
