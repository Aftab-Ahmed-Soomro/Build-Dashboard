import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDl8eG53ZaPO1AxtyxzldoBY4UL0H0LWs",
  authDomain: "saylaniclass-10b8d.firebaseapp.com",
  projectId: "saylaniclass-10b8d",
  storageBucket: "saylaniclass-10b8d.firebasestorage.app",
  messagingSenderId: "908848895688",
  appId: "1:908848895688:web:df8ad4617383ec76feb7fd",
  measurementId: "G-9BCZ7LN89T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut};