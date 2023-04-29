// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdiJvdnMyOtdxXKYWHFSIhzASObovxZ_s",
  authDomain: "ema-john-with-firebaseauth.firebaseapp.com",
  projectId: "ema-john-with-firebaseauth",
  storageBucket: "ema-john-with-firebaseauth.appspot.com",
  messagingSenderId: "432339303576",
  appId: "1:432339303576:web:47e2f01196ce3d0d6ae4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app