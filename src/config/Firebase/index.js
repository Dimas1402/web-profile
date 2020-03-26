import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-fU18NCA0ngpEZam1b4FhYiKXGhHDQ3U",
  authDomain: "web-profile-3d7fe.firebaseapp.com",
  databaseURL: "https://web-profile-3d7fe.firebaseio.com",
  projectId: "web-profile-3d7fe",
  storageBucket: "web-profile-3d7fe.appspot.com",
  messagingSenderId: "898511425081",
  appId: "1:898511425081:web:228d79e19b00394a6ac7e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
