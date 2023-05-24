import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDIbTuXMAL2Zje6-oghGu0dL53pmrpThdE",
    authDomain: "loginpage-81d42.firebaseapp.com",
    projectId: "loginpage-81d42",
    storageBucket: "loginpage-81d42.appspot.com",
    messagingSenderId: "777958398611",
    appId: "1:777958398611:web:0f96ef77c80ca3ec850b66",
    measurementId: "G-BB1NW0L1RN",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };