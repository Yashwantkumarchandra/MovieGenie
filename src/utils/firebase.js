// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUs_HC5QrM_jPRkR_Gk_Z_MVjka5sgbsA",
  authDomain: "moviegenie-66fef.firebaseapp.com",
  projectId: "moviegenie-66fef",
  storageBucket: "moviegenie-66fef.appspot.com",
  messagingSenderId: "999707865621",
  appId: "1:999707865621:web:95d08932f5d4454ee0141c",
  measurementId: "G-TXT6P79KYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
