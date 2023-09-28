// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Sg07eu_TOsptNK0z-bkFr0AFH6-Kt2U",
  authDomain: "react--map-b8887.firebaseapp.com",
  projectId: "react--map-b8887",
  storageBucket: "react--map-b8887.appspot.com",
  messagingSenderId: "751567708329",
  appId: "1:751567708329:web:69e7ff0f7cefdae03009b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;