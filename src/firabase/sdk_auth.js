// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEF-MmFNQegqNSNFDFq2karBGba-P3AjA",
  authDomain: "ecommerce-native-ce139.firebaseapp.com",
  databaseURL: "https://ecommerce-native-ce139-default-rtdb.firebaseio.com",
  projectId: "ecommerce-native-ce139",
  storageBucket: "ecommerce-native-ce139.appspot.com",
  messagingSenderId: "310164990587",
  appId: "1:310164990587:web:11dce08ba1dd9cbbf410de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const sdk_auth = getAuth(app)