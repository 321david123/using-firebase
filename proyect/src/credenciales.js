// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBylqw5I3BdBk7J2-4wQ7KdF8arvmyJypY",
  authDomain: "whatsongissbetter.firebaseapp.com",
  projectId: "whatsongissbetter",
  storageBucket: "whatsongissbetter.appspot.com",
  messagingSenderId: "416531854737",
  appId: "1:416531854737:web:a2ffbe57de2db0a87d1630",
  measurementId: "G-HS64VT37GH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp