import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyB7Mv-LvbBRXq8_QIcGWfm3axxaCGGM-h8",
    authDomain: "chatup-app.firebaseapp.com",
    databaseURL: "https://chatup-app.firebaseio.com",
    projectId: "chatup-app",
    storageBucket: "chatup-app.appspot.com",
    messagingSenderId: "970408957988",
    appId: "1:970408957988:web:5335ce971f626ee9"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
