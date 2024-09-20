import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de que esta línea está incluida

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEbGNiualeWGWcnHoMDERPWKLhMdBTYPw",
  authDomain: "aura-fe414.firebaseapp.com",
  projectId: "aura-fe414",
  storageBucket: "aura-fe414.appspot.com",
  messagingSenderId: "134937012442",
  appId: "1:134937012442:web:f702d56ee8c483c5719de3",
  measurementId: "G-Z7ERLLH0KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };