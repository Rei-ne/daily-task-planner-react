import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC66oKYqfr1TnZsOCJazg41ivG0n-dLjhU",
    authDomain: "tasks-d1ed0.firebaseapp.com",
    projectId: "tasks-d1ed0",
    storageBucket: "tasks-d1ed0.appspot.com",
    messagingSenderId: "215672610616",
    appId: "1:215672610616:web:e753c0b77b488098ca6bcd",
    measurementId: "G-WZRZY8KT60"
};

const app = initializeApp(firebaseConfig);
const database = firebase.database(app);

export default database;