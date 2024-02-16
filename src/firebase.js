
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkMBUp_pl6zZ_graIR1k1v_mwuatL0QKQ",
  authDomain: "imran-portfolio-b1733.firebaseapp.com",
  projectId: "imran-portfolio-b1733",
  storageBucket: "imran-portfolio-b1733.appspot.com",
  messagingSenderId: "611528803991",
  appId: "1:611528803991:web:ae36bb12dc576c138b8bd2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()