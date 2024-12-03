// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3eNqttYAdf03__Ylf4V2A3lmna2nS9fE",
  authDomain: "netflixgpt-de433.firebaseapp.com",
  projectId: "netflixgpt-de433",
  storageBucket: "netflixgpt-de433.firebasestorage.app",
  messagingSenderId: "893669265653",
  appId: "1:893669265653:web:c018699d302af4452735bc",
  measurementId: "G-E747XVSNVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
