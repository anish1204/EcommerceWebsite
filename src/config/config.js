
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAAjrZpzEI7ViUFFTgv-u3VpTMb-d-HRg8",
    authDomain: "ecommerce1-cbfc9.firebaseapp.com",
    projectId: "ecommerce1-cbfc9",
    storageBucket: "ecommerce1-cbfc9.appspot.com",
    messagingSenderId: "878917200677",
    appId: "1:878917200677:web:bbf49f66e9b7a3755d08cc",
    measurementId: "G-9J6W9MKCBW"
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

  export {auth,fs,storage};