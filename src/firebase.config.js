// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlpZMgQkK8yKVPwD14vkzN6mm5_VRJilM",
  authDomain: "foodie-772.firebaseapp.com",
  databaseURL: "https://foodie-772-default-rtdb.firebaseio.com",
  projectId: "foodie-772",
  storageBucket: "foodie-772.appspot.com",
  messagingSenderId: "1002411926470",
  appId: "1:1002411926470:web:dc1f4070f4f89ea31d48c7",
};

// Initialize Firebase
export const app =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
