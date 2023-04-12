// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQpepf2ex-ECbC_YOM54AtpBfQF35Vknc",
  authDomain: "diplom-864e6.firebaseapp.com",
  projectId: "diplom-864e6",
  storageBucket: "diplom-864e6.appspot.com",
  messagingSenderId: "904471069015",
  appId: "1:904471069015:web:2553f7c7a0db38494cfe12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categories = collection(db, "categories");