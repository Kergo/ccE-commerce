import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDPPW-arMseCI-2GVldiuKz0uj-wCM64ME",
  authDomain: "cce-commerce.firebaseapp.com",
  databaseURL: "https://cce-commerce.firebaseio.com",
  projectId: "cce-commerce",
  storageBucket: "cce-commerce.appspot.com",
  messagingSenderId: "416946371639",
  appId: "1:416946371639:web:d8025be013a924481313b2",
  measurementId: "G-8W1EKLHND4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;