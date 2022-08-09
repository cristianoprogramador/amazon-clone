import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOd1ht0UgDrdo5kS-LW6yHFlJ8eiXt0Zw",
  authDomain: "challenge-65c32.firebaseapp.com",
  projectId: "challenge-65c32",
  storageBucket: "challenge-65c32.appspot.com",
  messagingSenderId: "87839765809",
  appId: "1:87839765809:web:a274f8efb1a04691f6ac10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};