import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB3NSXD7IJ4YwSpiCcU8Z9oarHxhaJRyTE",
    authDomain: "e-ride-16cf3.firebaseapp.com",
    projectId: "e-ride-16cf3",
    storageBucket: "e-ride-16cf3.appspot.com",
    messagingSenderId: "830936548760",
    appId: "1:830936548760:web:420c19a36ea7f24e3697ed"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
