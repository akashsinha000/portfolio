
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyALwHxlQa7_aaejYvWpjg6B6sYI1A_x4vI",
  authDomain: "portfolio-df64b.firebaseapp.com",
  projectId: "portfolio-df64b",
  storageBucket: "portfolio-df64b.firebasestorage.app",
  messagingSenderId: "343107657273",
  appId: "1:343107657273:web:a32137f01192951ef577e8",
  measurementId: "G-HH3BVFB988"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);