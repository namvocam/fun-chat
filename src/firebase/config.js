import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAibGelGT_F3o0sliSeSYyseMQaLFYL69A",
  authDomain: "chat-app-b575e.firebaseapp.com",
  projectId: "chat-app-b575e",
  storageBucket: "chat-app-b575e.appspot.com",
  messagingSenderId: "299816052663",
  appId: "1:299816052663:web:4bd24b56b0202d29272a32",
  measurementId: "G-BF546FB9YL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === "localhost") {
//   auth.useEmulator("http://localhost:9099");
//   db.useEmulator("localhost", "8080");
// }

export { db, auth };
export default firebase;
