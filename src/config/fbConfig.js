import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBh-dJ3CL9bFzdk76fK1diJRXPgrg6Pd4s",
  authDomain: "redux-plan-project.firebaseapp.com",
  databaseURL: "https://redux-plan-project.firebaseio.com",
  projectId: "redux-plan-project",
  storageBucket: "redux-plan-project.appspot.com",
  messagingSenderId: "769105571241",
  appId: "1:769105571241:web:24f9792e0fc96cf2cbe8b8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
