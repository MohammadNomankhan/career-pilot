// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA32HLsL0G7iNTJ-QsXUpFcSKxLHIKBUKA",
    authDomain: "career-pilot-72184.firebaseapp.com",
    projectId: "career-pilot-72184",
    storageBucket: "career-pilot-72184.firebasestorage.app",
    messagingSenderId: "1083156902022",
    appId: "1:1083156902022:web:d1dba406e850af5ddf6107",
    measurementId: "G-CQ9B9EC7M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
const analytics = getAnalytics(app);