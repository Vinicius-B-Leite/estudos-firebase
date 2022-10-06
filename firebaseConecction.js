import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCIOX-GWjQjiHxSLZvWYd-V4c3CAX3nwhQ",
    authDomain: "sujeitoprogramador-89d23.firebaseapp.com",
    projectId: "sujeitoprogramador-89d23",
    storageBucket: "sujeitoprogramador-89d23.appspot.com",
    messagingSenderId: "160712754728",
    appId: "1:160712754728:web:8840dd1ecc8f3a8726171d",
    measurementId: "G-5CKEJ6EC3G"
  };

firebase.initializeApp(firebaseConfig)

export default firebase