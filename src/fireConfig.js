
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5zvpX3Wrc6OXFc43J-lZpcY0yS6a5aXk",
    authDomain: "authuser2-a8e6d.firebaseapp.com",
    projectId: "authuser2-a8e6d",
    storageBucket: "authuser2-a8e6d.appspot.com",
    messagingSenderId: "690607972403",
    appId: "1:690607972403:web:19a2a5858e2ab83aadc346"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;