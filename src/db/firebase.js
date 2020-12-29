// Your web app's Firebase configuration

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyANccnwx7TxKNjrSsdsEmhIsR9kAQqfXpY",
  authDomain: "remote-player-e0d3c.firebaseapp.com",
  projectId: "remote-player-e0d3c",
  storageBucket: "remote-player-e0d3c.appspot.com",
  messagingSenderId: "1007574629260",
  appId: "1:1007574629260:web:d00e1685424d9191bf74a9",
  measurementId: "G-MJBFZ8SN5V",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
firebase.analytics();
