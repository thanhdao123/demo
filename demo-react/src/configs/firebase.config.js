import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBWfkPicdJx2U07voNaqghO59nDTyIU_Mw",
  authDomain: "todo-app-1234.firebaseapp.com",
  databaseURL: "https://todo-app-1234.firebaseio.com",
  projectId: "todo-app-1234",
  storageBucket: "todo-app-1234.appspot.com",
  messagingSenderId: "803680605619",
  appId: "1:803680605619:web:69abe8e46a4b68c5"
};

firebase.initializeApp(firebaseConfig);
