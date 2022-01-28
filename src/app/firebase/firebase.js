import firebase from 'firebase'
import 'firebase/firebase-firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBRJflrItgIASUHJjbd5JTlWXd305eAubc",
    authDomain: "ssyncronime.firebaseapp.com",
    projectId: "ssyncronime",
    storageBucket: "ssyncronime.appspot.com",
    messagingSenderId: "390911726441",
    appId: "1:390911726441:web:dba8feb3cff287a1b563f8"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore()

export { db, fire }