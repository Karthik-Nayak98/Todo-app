import firebase from "firebase";
require("dotenv").config();
// export const DB_CONFIG = {
//   apiKey: "AIzaSyB8nD0nu2jG0cmyvLRBs3XgFwOg0b0cq8I",
//   authDomain: "todo-app-8c85e.firebaseapp.com",
//   databaseURL: "https://todo-app-8c85e.firebaseio.com",
//   projectId: "todo-app-8c85e",
//   storageBucket: "todo-app-8c85e.appspot.com",
//   messagingSenderId: "125772070027",
//   appId: "1:125772070027:web:1ffe3fd0560663a286288e",
//   measurementId: "G-KVNZJWDRBQ",
// };

// console.log(process.env);

const DB_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(DB_CONFIG);

export const auth = firebase.auth;
export const database = firebase.database;

// firebase.analytics();
// export default !firebase.apps.length
//   ?
//   : firebase.app();
