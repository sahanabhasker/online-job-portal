// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdlVVs_skacUresh6unbjl2QAjFFpDObQ",
  authDomain: "online-job-portal-58dc5.firebaseapp.com",
  projectId: "online-job-portal-58dc5",
  storageBucket: "online-job-portal-58dc5.firebasestorage.app",
  messagingSenderId: "367047026499",
  appId: "1:367047026499:web:761c2d1663d10924ef31f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};