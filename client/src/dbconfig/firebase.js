// use firebase file send in grp
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2hodrVFLGfMBI3WitMsOD_eZ8-wYeoWw",
  authDomain: "aerothon-44c82.firebaseapp.com",
  projectId: "aerothon-44c82",
  storageBucket: "aerothon-44c82.appspot.com",
  messagingSenderId: "330141750516",
  appId: "1:330141750516:web:972f05604b235234c07aa1",
  measurementId: "G-3F378Q591L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db= getFirestore(app);
export const storage = getStorage(app);