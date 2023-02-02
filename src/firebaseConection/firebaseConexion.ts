// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoHCGc2TAltDV7jG226kgMKsegaXtNyxc",
  authDomain: "acti29.firebaseapp.com",
  projectId: "acti29",
  storageBucket: "acti29.appspot.com",
  messagingSenderId: "854065725012",
  appId: "1:854065725012:web:4a39a35ecdc045d8a837c1",
  measurementId: "G-QM36D4DW4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//voy a exportar la base de datos y estoy 
//llamadno el metodo getFirestore

const db = getFirestore(app);
export default db;