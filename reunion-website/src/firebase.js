// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGaBsJ2UQkVMyH_zkVVj6ZJXlj_iaELLk",
    authDomain: "sps-reunion-blogs.firebaseapp.com",
    projectId: "sps-reunion-blogs",
    storageBucket: "sps-reunion-blogs.appspot.com",
    messagingSenderId: "781517549777",
    appId: "1:781517549777:web:d85ab65693c563536495f0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();