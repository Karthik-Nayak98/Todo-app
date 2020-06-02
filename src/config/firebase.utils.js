import firebase from "firebase";

export const DB_CONFIG = {
  apiKey: "AIzaSyB8nD0nu2jG0cmyvLRBs3XgFwOg0b0cq8I",
  authDomain: "todo-app-8c85e.firebaseapp.com",
  databaseURL: "https://todo-app-8c85e.firebaseio.com",
  projectId: "todo-app-8c85e",
  storageBucket: "todo-app-8c85e.appspot.com",
  messagingSenderId: "125772070027",
  appId: "1:125772070027:web:1ffe3fd0560663a286288e",
  measurementId: "G-KVNZJWDRBQ",
};

export default !firebase.apps.length
  ? firebase.initializeApp(DB_CONFIG)
  : firebase.app();
