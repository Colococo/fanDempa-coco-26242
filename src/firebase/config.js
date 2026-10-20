import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//esto no  se deberia compartir aca se usarian variables de entorno y archivo .env
const firebaseConfig = {
  apiKey: "AIzaSyBBhodtFstbDHF6ys3izPLIwI-9IR5pB5o",
  authDomain: "fandempa.firebaseapp.com",
  projectId: "fandempa",
  storageBucket: "fandempa.firebasestorage.app",
  messagingSenderId: "794698545542",
  appId: "1:794698545542:web:f31fce846024fa80219407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// // para el login
const auth = getAuth(app);

export { db, auth };