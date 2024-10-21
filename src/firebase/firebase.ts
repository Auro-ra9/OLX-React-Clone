import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Corrected import
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgxol1emARRBM1uOS3ZmQvx3wOhyhKWzY",
  authDomain: "olx-clone-a021b.firebaseapp.com",
  projectId: "olx-clone-a021b",
  storageBucket: "olx-clone-a021b.appspot.com",
  messagingSenderId: "985120154058",
  appId: "1:985120154058:web:16595975ff6ee2de2b2f33",
  measurementId: "G-DCYTYFK850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Use 'auth' for clarity
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app); // Pass the app instance if needed
