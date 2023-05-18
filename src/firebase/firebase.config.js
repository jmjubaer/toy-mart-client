// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhGYbVrZrTJ_xkXazntEC96Qd8HAuPBpM",
  authDomain: "jm-toy-hub.firebaseapp.com",
  projectId: "jm-toy-hub",
  storageBucket: "jm-toy-hub.appspot.com",
  messagingSenderId: "239580457984",
  appId: "1:239580457984:web:2b5dfbc0a15a9d08c27ce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;