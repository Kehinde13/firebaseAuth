// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDscdMqBSzpGspIz7F6-cy-NAN1WkdcGyc",
  authDomain: "fir-tut-31254.firebaseapp.com",
  projectId: "fir-tut-31254",
  storageBucket: "fir-tut-31254.appspot.com",
  messagingSenderId: "121012490326",
  appId: "1:121012490326:web:8ec900c1b76185892d2bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage()
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app)

export {
    app,
    storage,
    auth,
    provider,
    db
}