// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUqieMtpuoaBJ6Le15VC8eKRtIh2B7obI",
  authDomain: "authentication-8708e.firebaseapp.com",
  projectId: "authentication-8708e",
  storageBucket: "authentication-8708e.appspot.com",
  messagingSenderId: "365174012320",
  appId: "1:365174012320:web:4fff6d1a212b235f8bccc5",
  measurementId: "G-RQ1X9JRZD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase auth
const auth = getAuth();
// Initialize Firebasee Firestore
const db = getFirestore();

export { auth, db };
