import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD26cQtAxCAHdR3BvozR1HKrhE0N4hzgqA",
    authDomain: "typingwebsite-937b5.firebaseapp.com",
    projectId: "typingwebsite-937b5",
    storageBucket: "typingwebsite-937b5.appspot.com",
    messagingSenderId: "968733476253",
    appId: "1:968733476253:web:73b784487d2a856b5e9b74",
    measurementId: "G-T8B8H26K19"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db};



