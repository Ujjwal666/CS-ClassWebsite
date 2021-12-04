import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsOpr3bNlASt1mOAdT7JkP25iJAlHOEg8",
  authDomain: "cs-class-f67db.firebaseapp.com",
  projectId: "cs-class-f67db",
  storageBucket: "cs-class-f67db.appspot.com",
  messagingSenderId: "301628251828",
  appId: "1:301628251828:web:e36adb426cd847689d41e1",
  measurementId: "G-D102J1WT0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};