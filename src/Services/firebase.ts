import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2m48N-xapqv7PL5V8aqnR0s_No0u-_r0",
    authDomain: "expensetracker-3e8b5.firebaseapp.com",
    projectId: "expensetracker-3e8b5",
    storageBucket: "expensetracker-3e8b5.appspot.com",
    messagingSenderId: "953084391794",
    appId: "1:953084391794:web:0c809c4ac8c7e7ed4a6deb",
    measurementId: "G-6L0WQLED8C"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
