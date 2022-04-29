import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXU9URAT8gvSXv8x3NckOTIPlQUD3WvOM",
    authDomain: "crud-basic-7da4b.firebaseapp.com",
    projectId: "crud-basic-7da4b",
    storageBucket: "crud-basic-7da4b.appspot.com",
    messagingSenderId: "306668187086",
    appId: "1:306668187086:web:98b0402c83a57eaaf48f9f",
    measurementId: "G-KLHBX1GG9Z"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)