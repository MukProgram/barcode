// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1b_zQCPXlRZLXijon0EaFPW2ObnZrri4",
  authDomain: "barcode-scanner-e3410.firebaseapp.com",
  projectId: "barcode-scanner-e3410",
  storageBucket: "barcode-scanner-e3410.appspot.com",
  messagingSenderId: "435432212854",
  appId: "1:435432212854:web:db100043c47e477e971257",
  measurementId: "G-E00MJRG9RN",
  databaseURL: "https://barcode-scanner-e3410-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

export {db};
export const auth = getAuth(app);