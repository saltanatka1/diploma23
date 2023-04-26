// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
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
// Инициализация базы данных
const db = getFirestore(app);
const auth = getAuth(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');
export const productsCollection = collection(db, 'products');
export const ordersCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const logIn= () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);